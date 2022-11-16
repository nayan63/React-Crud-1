import './NotFound.css';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { listApi,deletePostApi } from './use-http';
import Button from '@mui/material/Button';
import {Link, useLocation} from 'react-router-dom';
import Alert from '@mui/material/Alert';

const List = () => {

    const location = useLocation();
    const [records, setRecords] = useState({});
    const [alerts,setAlerts] = useState(false);
    const [message,setMessage] = useState('');
    useEffect(() => {
        valueChanges();
    },[]);

    const valueChanges = ()=>{
        getAllPosts();
        if( location.state!==null) 
        {
            setAlerts(true);
            setMessage(location.state.message);
            setTimeout(()=>{
                setAlerts(false);
            },3000);

            window.history.replaceState({}, document.title)
        }
    }

    const getAllPosts = ()=>{
        listApi().then((res) => {
            setRecords(res);
        });
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
        },
    }));

    const deletePost = (data)=>{
        console.log(data);
        deletePostApi(data);
        setAlerts(true);

        setTimeout(()=>{
            setAlerts(false);
            setMessage("Deleted Successfully")
        },3000);
        getAllPosts();
    }

    return (
        <div className="list-table">
            {alerts?<Alert severity="warning">{message}</Alert>:''}
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center">TITLE</StyledTableCell>
                            <StyledTableCell align="center">AUTHOR</StyledTableCell>
                            <StyledTableCell align="center">EDIT</StyledTableCell>
                            <StyledTableCell align="center">DELETE</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(records).map(row => (
                            <TableRow key={row}>
                                <TableCell component="th" scope="row">
                                    {records[row].id}
                                </TableCell>
                                <TableCell align="center">{records[row].title}</TableCell>
                                <TableCell align="center">{records[row].author}</TableCell>
                                <TableCell align="center">
                                    <Link to={`/edit/${records[row].id}`}>
                                        <Button variant="contained" color="warning">
                                            EDIT
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="error" onClick={()=>deletePost(records[row].id)}>
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        </div>
    )
}
export default List;