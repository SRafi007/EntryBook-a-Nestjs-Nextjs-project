import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Employees from '@/components/employees'

const inter = Inter({ subsets: ['latin'] })

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3001/entrybook')
//   const employees = await res.json()
//   console.log(employees)

//   return {
//     props: {
//       employees
      
//     }
//   }
// }

export default function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
