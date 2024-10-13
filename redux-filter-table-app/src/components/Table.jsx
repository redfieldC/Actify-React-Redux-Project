import React from "react";
import { useSelector } from "react-redux";
import { selectTableData } from "../features/tableSlice";
import { useState } from "react";
import './tableStyle.css';  // Corrected CSS import
import Form from "./Form";

const Table = () => {
  const tableData = useSelector(selectTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "ascending" });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((row) => {
    return (
      row.id.toString().includes(searchTerm.toLowerCase()) ||
      row.name.toString().includes(searchTerm.toLowerCase()) ||
      row.age.toString().includes(searchTerm.toLowerCase()) ||
      row.job.toString().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Form/>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th
              onClick={() => handleSort("id")}
              className={sortConfig.key === "id" ? (sortConfig.direction === "ascending" ? "sort-ascending" : "sort-descending") : ""}
            >
              ID
            </th>
            <th
              onClick={() => handleSort("name")}
              className={sortConfig.key === "name" ? (sortConfig.direction === "ascending" ? "sort-ascending" : "sort-descending") : ""}
            >
              Name
            </th>
            <th
              onClick={() => handleSort("age")}
              className={sortConfig.key === "age" ? (sortConfig.direction === "ascending" ? "sort-ascending" : "sort-descending") : ""}
            >
              Age
            </th>
            <th
              onClick={() => handleSort("job")}
              className={sortConfig.key === "job" ? (sortConfig.direction === "ascending" ? "sort-ascending" : "sort-descending") : ""}
            >
              Job
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No result found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
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
