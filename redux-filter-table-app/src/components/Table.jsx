import React from 'react'
import {useSelector} from 'react-redux'
import { selectTableData } from '../features/tableSlice'
const Table = () => {
  const tableData = useSelector(selectTableData);
  return (
    <table border="1" style={{width:'100%', textAlign:'left'}}>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
      </thead>
      <tbody>
        {
          tableData.map((row)=>(
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.job}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table