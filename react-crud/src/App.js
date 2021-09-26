import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Home";
import { EditUser } from "./components/EditUser";
import { AddUser } from "./components/AddUser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userList, setUserList] = useState([]);   // userlist = []

  const addUserList = (user) => {
    // setUserList([...userList,{firstName:users.firstName, lastName:users.lastName, checkbox:users.checkbox}]);
    setUserList([...userList, user]);
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id)); 
  };

  const editUser = (id, selectedUser) => {
    setUserList(userList.map((user)=> {
      if(user.id === id) {
        user.firstName = selectedUser.firstName
        user.lastname = selectedUser.lastname
      }
      return user
    }));
  };

  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route path="/home">
            <Home list={userList} deleteUser={deleteUser} />  
          </Route>
          <Route path="/add">
            <AddUser updateUserLists={addUserList} />
          </Route>
          <Route
            path="/edit/:id"
            render={(props)=><EditUser userList={userList} update={EditUser} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
