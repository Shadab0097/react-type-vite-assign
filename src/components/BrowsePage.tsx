import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DataGrids from './DataGrid';
import DepartmentData from './DepartmentData';

const BrowsePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user details are available in localStorage
    const userDataString = localStorage.getItem('userData');
     console.log(userDataString)
    if (!userDataString) {
       // If not, redirect to the form page with a message
       alert('Please enter your details before accessing the second page.');
       navigate('/');
  
    } else if (location.pathname === '/' && userDataString ) {
      // If user is already logged in and tries to access the login page, redirect them to the second page
      navigate('/second-page');
    }
  }, []);

  return (
    <>
      <div>
        <h1 className='browse-Page'>Second Page</h1>
        <p className='browse-page-content'>This is the second page content.</p>
        <DataGrids/>
        <DepartmentData/>
      </div>
    </>
  );
};

export default BrowsePage;
