import React from 'react';
import { Heading } from './Heading';
import { UserList } from './UserList';

export const Home = (props) => {
    const {list, deleteUser}= props;
    
    return (
        <div>
            <Heading />
            <UserList deleteUser={deleteUser} users={list}/>
        </div>
    )
}



/*
    user = []
    list = user
    users = list
    
*/