import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import styles from "./FileUpload.module.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (!file) return;

    const fileRef = ref(storage, "uploads/" + uuidv4() + "-" + file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => {
        console.error("File upload error", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileUrl(url);
        });
      }
    );
  };

  return (
    <div className={styles.container}>
      <h2>Upload Your File</h2>
      <input type="file" onChange={handleFileChange} />
      {progress > 0 && <progress value={progress} max="100" />}
      <button onClick={handleFileUpload}>Upload</button>
      {fileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </div>
      )}
    </div>
  );
}

export default FileUpload;