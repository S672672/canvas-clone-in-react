import React from 'react';
import './App.css'

export default function Card({ threedots, subject, subjectcode, year, announcement, notes, message }) {
  return (
    <div className='cards'>
      <div className='header'>
        <p className='threedots'>{threedots}</p>
      </div>
      <div className='middlesec'>
        <span>{subject}</span>
        <span>{subjectcode}</span>
        <span>{year}</span>
      </div>
      {/* <div className='footer'>
        <img src={announcement} alt="Announcement" />
        <img src={notes} alt="Notes" />
        <img src={message} alt="Message" />
      </div> */}
    </div>
  );
}
