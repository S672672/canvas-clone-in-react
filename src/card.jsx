import React from 'react';
import './App.css'
import './InsideCard/home.jsx'
import {Outlet, link} from 'react-router-dom'

export default function Card({threedots, subject, subjectcode, year, announcement, notes, discussion }) {
  return (
    <link to = '/Home'>
    <div className='cards'>
      <div className='header'>
        <p className='threedots'>{threedots}</p>
      </div>
      <div className='middlesec'>
        <span className='subject'>{subject}</span>
        <span className='subjectcode'>{subjectcode}</span>
        <span className='year'>{year}</span>
      </div>
      <div className='footer'>
        <img src={announcement} alt="Announcement" />
        <img src={notes} alt="Notes" />
        <img src={discussion} alt="discussion" />
      </div>
    </div>
    </link>
  );
}
