function Employees({ employees }) {
    return (
      <div>
        <h1>Employee List</h1>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.mail}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/entrybook')
    const employees = await res.json()
    console.log(employees)
  
    return {
      props: {
        employees
        
      }
    }
  }
  
  export default Employees
