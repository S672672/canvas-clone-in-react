import React from 'react';
import './App.css';

export default function Card({subject,subjectcode,year,announcement,message,notes,threedots}) {
  return (
    <>
    <div className='card'>
    <div className='card1'>
    <div className='threedots'>{threedots}</div>
    </div>
    <div className='card2'>
        <div className='content'>{subject}<span>{subjectcode}</span><span>{year}</span></div>
    </div>
    <div className='cardfooter'>
        <img src={announcement}></img>
        <img src={message}></img>
        <img src={notes}></img>
    </div>
    </div>
    </>
  )
}