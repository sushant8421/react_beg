import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.contentData.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.job}</td>
        <td>
          <button onClick={() => props.handleRemove(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { contentData, handleRemove } = props;
  return (
    <table>
      <TableHeader />
      <TableBody contentData={contentData} handleRemove={handleRemove} />
    </table>
  );
};

export default Table;
