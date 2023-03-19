import { useState, useEffect } from 'react';
//import './styles/Dashboard.css';
import styles from '../styles/Dashboard.module.css';
//import '../styles/globals.css'
import Mynavbar from '../components/Mynavbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const initialData =await fetch('/api/entryEventGenarator');
      const res = await fetch('/api/employees');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
            <Mynavbar/>
            <Sidebar/>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Type</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Joining Date</th>
            
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employeeID}</td>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.jobType}</td>
                <td>{employee.mail}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.joiningDate}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

