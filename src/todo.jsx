import React from 'react'

export default function Todo({Experiment,subjectcodes,deadline}) {
  return (
    <>
        <div className='todolist'>
            <h1>{Experiment}</h1>
            <p>{subjectcodes}</p>
            <p>{deadline}</p>
        </div>
    </>
  )
};