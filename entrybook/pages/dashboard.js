import { useState, useEffect } from 'react';
//import './styles/Dashboard.css';
import styles from '../styles/Dashboard.module.css';
//import '../styles/globals.css'

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/employees');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
            <nav className={styles.navbar}>
        <a href="#" className={styles.navbar}>
          EntryBook
        </a>
        <ul className={styles.navlinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.mail}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.employeeID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

