import React from "react";
import { useSelector } from "react-redux";
import { selectTableData } from "../features/tableSlice";
import { useState } from "react";
const Table = () => {
  const tableData = useSelector(selectTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm,setSearchTerm]=useState("");
  const [sortConfig,setSortConfig] = useState({key:"",direction:"ascending"});


  const handleSort = (key) =>{
    let direction ="ascending"
    if(sortConfig.key===key && sortConfig.direction==="ascending"){
      direction="descending";
    }
    setSortConfig({key,direction});
  }

  const sortedData = React.useMemo(() => {
    let sortableData = [...tableData];
  
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (typeof a[sortConfig.key] === 'string' && typeof b[sortConfig.key] === 'string') {
          return sortConfig.direction === "ascending"
            ? a[sortConfig.key].localeCompare(b[sortConfig.key]) // String comparison
            : b[sortConfig.key].localeCompare(a[sortConfig.key]);
        } else {
          // Assume the data is a number
          return sortConfig.direction === "ascending"
            ? a[sortConfig.key] - b[sortConfig.key] // Numeric comparison
            : b[sortConfig.key] - a[sortConfig.key];
        }
      });
    }
    return sortableData;
  }, [tableData, sortConfig]);
  

  const filteredData = tableData.filter((row)=>{
    // const id = row.id ? row.id.toString().toLowerCase() : "";
    // const name = row.name ? row.name.toLowerCase() : "";
    // const age = row.age ? row.age.toString().toLowerCase() : "";
    // const job = row.job ? row.job.toLowerCase() : "";
    return (
      row.id.toString().includes(searchTerm.toLowerCase())||
      row.name.toString().includes(searchTerm.toLowerCase())||
      row.age.toString().includes(searchTerm.toLowerCase())||
      row.job.toString().includes(searchTerm.toLowerCase())
    )
  })
  
  console.log('table DATA---> ',tableData);
  console.log('FILTERED DATA---> ',filteredData);
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event) =>{
    setSearchTerm(event.target.value)
    setCurrentPage(1);
  }

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}  style={{marginBottom:"10px" ,padding:"5px" ,width:"100%"}}/>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th onClick={()=>handleSort("id")} style={{cursor:"pointer"}}>
              ID {sortConfig.key === "id" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Name {sortConfig.key === "name" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("age")} style={{ cursor: "pointer" }}>
              Age {sortConfig.key === "age" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("job")} style={{ cursor: "pointer" }}>
              Job {sortConfig.key === "job" ? (sortConfig.direction === "ascending" ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ?(
            currentItems.map((row)=>(
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
              </tr>
            ))
          ):(
            <tr>
              <td colSpan='4' style={{textAlign:"center"}}>
                No result found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop:"10px"}}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
