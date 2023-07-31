import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HeaderBar from './HeaderBar'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function Crf() {
    const [crfs, setCrfs] = useState([])

  useEffect( () => {

    axios.get("http://localhost:3030/casereportforms").then( response => 
        setCrfs(response.data)
    )
    .catch()

  }, [])
  return (
    <React.Fragment>
        <HeaderBar></HeaderBar>
        <h1>Case Report Form</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sequence ID</StyledTableCell>
                        <StyledTableCell align="right">Visit Code</StyledTableCell>
                        <StyledTableCell align="right">Visit Name</StyledTableCell>
                        <StyledTableCell align="right">Case Report Form Code</StyledTableCell>
                        <StyledTableCell align="right">Case Report Form Name</StyledTableCell>
                        <StyledTableCell align="right">&nbsp;&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        crfs.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.visitcode}</StyledTableCell>
                                <StyledTableCell align="right">{row.visitname}</StyledTableCell>
                                <StyledTableCell align="right">{row.crfcode}</StyledTableCell>
                                <StyledTableCell align="right">{row.crfname}</StyledTableCell>
                                <StyledTableCell align="right">Edit</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </React.Fragment>
    
  )
}

export default Crf

