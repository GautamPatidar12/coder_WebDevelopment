import React, { useState } from "react";
import { storage, firestore, auth } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Upload.module.css";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(storageRef);
        await addDoc(collection(firestore, "files"), {
          url: downloadURL,
          name: file.name,
          uploadedBy: auth.currentUser.uid,
        });
        setUploading(false);
        alert("File uploaded successfully!");
        setFile(null);
        setUploadProgress(0);
      }
    );
  };

  return (
    <div className={styles.container}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploading && <progress value={uploadProgress} max="100" />}
    </div>
  );
}

export default Upload;