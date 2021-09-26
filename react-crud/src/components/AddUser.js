import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

export const AddUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const [userLists, setUserLists] = useState([]);

  const { updateUserLists } = props;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload page

    // creating raw user
    let user = {
      firstName: firstName,
      lastName: lastName,
      checkbox: checkbox,
      id: uuidv4(),
    };
    setFirstName("");
    setLastName("");
    setCheckbox(false);
    console.log(user);
    updateUserLists(user);  //send user to app function or calling update function
    

    e.target.reset(); // reset form
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            onClick={(e) => {
                console.log(e.target.checked);
                setCheckbox(e.target.checked);
            }}
          />{" "}
          I agree to the Terms and Conditions
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/home" className="btn btn-danger ml-2">
        cancel
      </Link>
    </Form>
  );
};
