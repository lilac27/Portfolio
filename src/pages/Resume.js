import React from 'react';
import resumePDF from '../files/resume.pdf';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <iframe src={resumePDF} width="100%" height="500px" title="Resume Preview"></iframe>
      <a href={resumePDF} download>Download Resume</a>
    </div>
  );
};

export default Resume;