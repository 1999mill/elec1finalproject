import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './AddTracker.css';

export default function Login(){
    return(

        <Container component="main" maxWidth="xs" className='Container'>
            <Box
            sx={{
               
                marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            }}>
              
               <Typography component="h1" variant="h4" sx={{marginBottom:"5px"}}>
           Add Tracker
          </Typography>
                
          <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                
                  name="Username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoComplete="users"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="DeviceID"
                  label="DeviceID"
                  name="DeviceID"
                  
                />
              </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to put a tracker into this device"
                />
              </Grid>
            </Grid>
                <Button size='small' variant='contained' style={{backgroundColor:"green", borderStyle:'none'}}
                sx={{marginTop:"1rem", marginBottom:"1rem"}}>Submit</Button>
                <Grid item>
                <Link href="/Tracker" variant="body2">
                 View Tracked Users
                </Link>
              </Grid>
            </Box>
        </Container>
    )


}