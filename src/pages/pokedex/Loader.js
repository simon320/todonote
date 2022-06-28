import React from 'react'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        position: 'absolute',
        left: '40px',
        top: '100px',
        width: '100px',
    }}>
        <CircularProgress color="secondary" />
    </Box>
  )
}

export default Loader