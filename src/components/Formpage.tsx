// import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage: React.FC = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user details to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    // Redirect to the second page
  
    history('/second-page');
    
  };

  return (
    <div className='formPage-containor'>
      <h1 className='heading'>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className='nameBox'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input className='telBox'
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input className='emailBox'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button className='btn-Submit' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
