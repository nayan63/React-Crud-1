import { useEffect, useState } from 'react';
import './NotFound.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import {getPostApi,updatePostApi} from './use-http';

const details = {
    id:'',
    title: '',
    author: ''
};
const Edit =()=> {
    const [inputs,setInputs] = useState(details);
    const {id,title,author} = inputs;

    const {pId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getPosts();
    },[]);

    const getPosts = async ()=>
    {
        await getPostApi(pId).then(result =>
        {
            setInputs(result);
        });
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(vals => ({ ...vals, [name]: value }))
    }

    const handleSubmit = (e) => {

        let response= null;
        e.preventDefault();
        const values = {
            id: pId,
            title: inputs.title,
            author: inputs.author
        }
        updatePostApi(values).then(res=>{
            response = res;
        });
        navigate('/list', {state:{message: "Edit Successfully"}})
    }

    return (
        <div className="not-found">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>

                <FormControl>
                    <TextField id="outlined-basic" value={title} name='title' label="TITLE" onChange={handleChange} variant="outlined" />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField id="outlined-basic" name='author' value={author} label="AUTHOR" onChange={handleChange} variant="outlined" />
                </FormControl>
                <br />
                <br />
                <Button type="submit" variant="contained" size="medium">
                    SUBMIT
                </Button>

            </form>
        </div>
    )
}
export default Edit;