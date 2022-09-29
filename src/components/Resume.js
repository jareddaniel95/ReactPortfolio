import React from 'react';

export default function Resume() {
  return (
    <div className='d-flex flex-column justify-content-center p-2'>
      <div className='content section-head'>Resume</div>
      {/* <div className='content'>
        <a href={process.env.PUBLIC_URL + '/resume.pdf'}>Download</a>
      </div> */}
      <div className='content'>
        <iframe src={process.env.PUBLIC_URL + '/resume-jared-daniel.pdf'} title='resume' height='1200px' width='1200px'></iframe>
      </div>
    </div>
  );
}