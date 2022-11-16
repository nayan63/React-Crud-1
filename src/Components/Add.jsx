import { useState } from 'react';
import Form from './Form';
import './NotFound.css';
import Alert from '@mui/material/Alert';

const Add =()=> {
    const [data,setData] = useState({});
    const [alert,setAlert] = useState(false);
    const getData = (b)=>{
        setData(b);
        setAlert(true);
    }

    return (
        <div className="not-found">
            <h1>Add User</h1>
            {alert?<Alert severity="success"><b>{data.id}.</b>{data.title}</Alert>:null}<br/>
            <Form request={getData} />
        </div>
    )
}
export default Add;