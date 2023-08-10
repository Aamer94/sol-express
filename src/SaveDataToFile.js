// src/components/SaveDataToFile.js
import React from "react";
import { saveAs } from "file-saver";

const SaveDataToFile = ({ data }) => {
  const handleDownload = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "data.json");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Data</button>
    </div>
  );
};

export default SaveDataToFile;
