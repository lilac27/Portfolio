import React from 'react';
import profilePicture from '../images/Lilac.JPG';
import '../App.css';

export default function About() {
  return (
    <div className='flex'>
      <img src={profilePicture} alt="Lilac Profile" className="profile-picture" />
      <div className='ml-2'>
        <h1 className='text-center p-3 text-lg'>About Me</h1>
        <p className='pb-5'>
          Joshua "Lilac" Jonas was originally born in Elko, NV. Growing up, they excelled in school and sports, earning them accolades such as the US Marine Distinguished Athlete award and the Triple E award, the highest award granted by Elko High School. In 2017 they were awarded the Eccles Scholarship, gaining them a full ride to the University of Utah. While at the U, they studied Philosophy and Mathematics, eventually graduating with a B.S. in Philosophy, and a minor in Mathematics. Upon graduation, they entered the workforce, taking time to pursue their several hobbies, such as rock climbing, reading, and ceramics. They then made the decision to go back to school for web development, enrolling in the University of Utah's full stack web development bootcamp. They graduated from the program on October 10 and are currently searching for jobs in tech.
        </p>
      </div>
    </div>
  );
}
