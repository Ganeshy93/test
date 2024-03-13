import React from 'react';
import './MyResume.css'; // Import CSS file for styling

const MyResume = () => {
  const fullName = "Ganesh";
  const resumeUrl = process.env.PUBLIC_URL + "/Ganesh.pdf"; // Use PUBLIC_URL to reference files in the public folder
  const projectName = "Ganesh";
  
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Hello This is <a href="https://www.linkedin.com/in/ganeshyalakala/">{fullName}</a></h1>
      <div className="resume-preview-container">
        <embed className="resume-preview" src={resumeUrl} type="application/pdf" width="800" height="1000" />
      </div>
      <div className="download-button-container">
        <a className="resume-download-link" href={resumeUrl} download={`${projectName}_resume.pdf`}>
          <button className="resume-download-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default MyResume;
