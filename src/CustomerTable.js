import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function CustomerTable(props) {
  console.log("delelejjj")
  return (
    <div className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>College</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.customerdata.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phonenum}</td>
              <td>{item.college}</td>
              <td>{item.location}</td>
              <Button variant="success">Edit</Button>
              <Button
                  variant="danger"
                  onClick={() => props.deleteddata(item.id)} // Ensure correct function call
                >
                  Delete
                </Button>
            </tr>
          
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerTable;
