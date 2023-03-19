import React from 'react';
import styles from '../styles/Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><a href="#">View EntryBook</a></li>
        <li><a href="#">Today's Attendance</a></li>
        <li><a href="#">Update EntryBook</a></li>
        <li><a href="#">Search EntryBook</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
