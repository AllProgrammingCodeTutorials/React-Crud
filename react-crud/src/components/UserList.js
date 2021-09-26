import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export const UserList = (props) => {
  const {users, deleteUser} = props;

// for static data 
//   let users = [
//     {
//       firstName: "dhiraj",
//       lastName: "koirala",
//       checkbox: true,
//     },
//     { firstName: "anju",
//      lastName: "grg",
//       checkbox: false },
//   ];

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Checked</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => { //mapping users data with list
            return (
            <tr key = {i}>
                <td>{user.firstName} </td>
                <td>{user.lastName}</td>
                <td>{user.checkbox ? 'checked': 'unchecked'}</td>
                <td><i onClick={()=>deleteUser(user.id)} className="far fa-trash-alt"></i> <Link to={`/edit/${user.id}`}><i className="fas fa-edit"></i></Link></td>
           </tr>)
        })}
      </tbody>
    </Table>
  );
};
