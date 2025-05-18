import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(res => {
        if (res.data.Status) {
          setData(res.data.Result);
        } else {
          alert("Error fetching employee data");
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>

      <Link to="/dashboard/create" className='btn btn-success mb-3'>Add Employee</Link>

      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>
                  <img 
                    src={`http://localhost:3000/Images/${employee.image}`} 
                    alt={employee.name} 
                    className='employee_image' 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                  <Link className='btn btn-primary btn-sm me-2'>Edit</Link>
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
