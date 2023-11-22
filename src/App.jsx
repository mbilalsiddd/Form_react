import React from 'react';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import './App.css';


function App() {

  return (

    <>
      <form className='container'>
        <h1><center>Try Sign Free for 14 Days</center></h1>
        <h3><center>Already have a formstack acount? start your trial in app</center></h3>

        <div style={{ display: 'flex' }}>
          <h3 style={{ width: '20%' }}>First Name</h3>
          <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" />
          <h3 style={{ width: '20%', marginLeft: '6px' }}>last Name</h3>
          <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <h3>Work Email</h3>
        <TextField fullWidth label="Work Email" id="fullWidth" />
        <h3>Password</h3>
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <h3>Organization Name</h3>
        <TextField fullWidth label="Select" id="fullWidth" />
        <h3>Industry</h3>
        <TextField fullWidth label="Select" id="fullWidth" />

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ad omnis nihil sapiente cum facilis excepturi molestias maiores quibusdam quia itaque est at alias maxime quo, error asperiores esse! Ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos deserunt ex, quaerat perferendis minima magnam voluptate molestiae ad voluptatibus voluptas enim dolores velit illum, laborum unde cum iusto blanditiis!.</p>
        <Button style={{
          marginLeft: '2%',
          height: '50px',
          width: '95%',
          backgroundColor: 'black'
        }} variant="contained" disableElevation>
          Start Free Trial
        </Button>

      </form>

    </>
  )
}


export default App;
