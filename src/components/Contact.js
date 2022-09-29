import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'body') {
      setBody(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Thank you for reaching out, ${name}!`);

    setName('');
    setBody('');
    setEmail('');
  };

  return (
    <div className='d-flex flex-column justify-content-center p-2'>
      <div className='content section-head'>Contact Me</div>
      <form>
          <div className='d-flex justify-content-center'>
            <div className='w-50'>
              <div className='mb-3'><input name='name' placeholder='Name' className='form-control' onChange={handleInputChange} /></div>
              <div className='mb-3'>
                {errorMessage && (
                  <div className='mb-3'>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                <input type='email' name='email' placeholder='email' className='form-control' onChange={handleInputChange} />
              </div>
              <div className='mb-3'><textarea name='body' placeholder='Write something...' className='form-control' onChange={handleInputChange} /></div>
              <div className='mb-3'><button className='btn btn-primary btn-lg btn-block w-100' onClick={handleFormSubmit}>Submit</button></div>
              
            </div>
          </div>
      </form>
    </div>
  );
}