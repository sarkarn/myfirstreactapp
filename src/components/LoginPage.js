
import { Link } from 'react-router-dom'
import React from 'react'
import { Grid} from '@mui/material'
import { Paper} from '@mui/material'
import { Avatar} from '@mui/material'
import { TextField} from '@mui/material'
import { Button} from '@mui/material'
import {Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';


const LoginPage=()=>{

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const navigate = useNavigate();

    const handleClick = () => {
      // 👇️ navigate programmatically
      navigate('/home');
    };

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Welcome to Our Portal</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button color='primary' variant="contained" style={btnstyle} 
                        fullWidth onClick={handleClick}>
                    Sign in
                </Button>
                <Typography >
                     <Link to="forget-password" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link to="register" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginPage
