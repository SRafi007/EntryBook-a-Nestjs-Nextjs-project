import { useState,useEffect } from 'react';
import styles from '../styles/Dashboard.module.css';
import Mynavbar from '../components/Mynavbar';
import Sidebar from '../components/Sidebar';


const entrySheet = () => {
  const [data, setData] = useState(null);

  // Fetch data from API endpoint
  useEffect(() => {
    async function fetchData() {
      //const initialData =await fetch('/api/entryEventGenarator');
      const res = await fetch('/api/entrySheetApi');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  // Call API endpoint to update inTime
  const handleInTimeClick = async (id) => {
    // try {
    //   const response = await fetch(`/api/updateInTime/${id}`, {
    //     method: 'PUT',
    //   });
    //   fetchData();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Call API endpoint to update outTime
  const handleOutTimeClick = async (id) => {
    // try {
    //   const response = await fetch(`/api/updateOutTime/${id}`, {
    //     method: 'PUT',
    //   });
    //   fetchData();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    
    <div class={styles.fullscreen}>
    <Mynavbar/>
    <Sidebar/>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>In Time</th>
          <th>Out Time</th>
          <th>Status</th>
          <th>Working Hours</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
            data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button onClick={() => handleInTimeClick(item.id)}>
                Start-{item.inTime}
              </button>
            </td>
            <td>
              <button onClick={() => handleOutTimeClick(item.id)}>
                Stop-{item.outTime}
              </button>
            </td>
            <td>{item.status}</td>
            <td>{item.workingHours}</td>
          </tr>
        ))
        ):(
            <tr>
            <td colSpan="6">Loading data...</td>
          </tr> 
        )
    }
      </tbody>
    </table>
    </div>
  );
}

export default entrySheet;
