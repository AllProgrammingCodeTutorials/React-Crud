import React, {useState, useEffect} from 'react'
import {Link, useHistory } from 'react-router-dom';
import {
    Form, 
    FormGroup,
    Label,
    Input,
    Button, 
} from 'reactstrap';



export const EditUser = (props) => {
    const [user, setUser] = useState({});
    const {userList, update} = props;
    const history = useHistory();

    // useEffect(()=>{},[])
    useEffect(() => {

        const usr = userList.find((user) => user.id === props.match?.params?.id)
        
        usr ? setUser(usr) : console.log('No user data');
        
    }, [])

    const handleSubmit = (e)=> {
        e.preventDefault();
        update(props?.match?.params?.id, user, history.push('/home'));
        
    }

    return (
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label>First Name</Label>
            <Input value={user?.firstName} type= "text" placeholder="Enter first name" onChange={(e)=> {
                setUser({...user, firstName: e.target.value})
            }}></Input>
            <Label>Last Name</Label>
            <Input value={user?.lastName} type= "text" placeholder="Enter last name" onChange={(e)=> {
                setUser({...user, lastName: e.target.value})
            }}></Input>
        </FormGroup>
        <Button type="submit">update</Button>
        <Link to="/home" className="btn btn-danger ml-2">cancel</Link>
    </Form>

    )
}
