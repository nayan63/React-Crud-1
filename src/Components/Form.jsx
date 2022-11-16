import './NotFound.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { addApi } from './use-http';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate();
    const details = {
        title: '',
        author: ''
    };

    const [inputs, setInputs] = useState(details);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(vals => ({ ...vals, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addApi(inputs).then((x) => {
            props.request(x);
        });

        e.target.reset();

        navigate("/list", {state:{message: "Added Successfully"}});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <FormControl>
                    <TextField id="outlined-basic" value={inputs.title} name='title' label="TITLE" onChange={handleChange} variant="outlined" />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <TextField id="outlined-basic" name='author' value={inputs.author} label="AUTHOR" onChange={handleChange} variant="outlined" />
                </FormControl>
                <br />
                <br />
                <Button type="submit" variant="contained" size="medium">
                    SUBMIT
                </Button>

            </form>
        </>
    )
}
export default Form;