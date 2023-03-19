import styles from '../styles/Navbar.module.css';
function  Mynavbar(){
return(
  <>
<nav className={styles.navbar}>
        <a href="#" className={styles.navbar}>
          EntryBook
        </a>
        <ul className={styles.navlinks}>
          <li>
            <a className={styles.navlinks}  href="#">Home</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#">About Us</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
</>
);
}
export default Mynavbar;