import { Link } from 'react-router-dom'
import React from 'react'
import { FormControl, Grid} from '@mui/material'
import { Paper} from '@mui/material'
import { TextField} from '@mui/material'
import { Button} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';


import '../App.css'

export default function SignUpPage() {

    const btnstyle={margin:'8px 0'}
    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const navigate = useNavigate();

    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate('/home');
      };

    return (

        <FormControl >
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h2>Create your personal account</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                    <TextField label='Email Address' placeholder='Enter Email Address' type='email' variant="outlined" fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="I agree all terms and condition"
                    />
                    <Button color='primary' variant="contained" style={btnstyle} 
                            fullWidth onClick={handleClick}>
                        Register
                    </Button>
                </Paper>
            </Grid>
        </FormControl>
       
    )

}
