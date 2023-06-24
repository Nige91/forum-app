import React, { useState } from 'react';
import FirebaseService from "../firebase/FirebaseService.ts";

const JsonUploader: React.FC = () => {
  const [json, setJson] = useState('');

  const handleUpload = async () => {
    await FirebaseService.addDataFromJson(json);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 my-4 bg-white rounded-md shadow-md">
      <textarea
        className="w-full h-64 px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="JSON Data"
        value={json}
        onChange={e => setJson(e.target.value)}
      />
      <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default JsonUploader;