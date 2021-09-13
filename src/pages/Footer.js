import React from 'react';
import Typography from '@material-ui/core/Typography';
import lighthouse from '../constants/lighthouse.gif';
import { Box } from '@material-ui/core';

export default function Footer() {
   return (
      <Box
         display={{ xs: 'none', sm: 'block' }}
         className='header'
         style={{
            textAlign: 'center',
            backgroundColor: '#87cdf4',
            height: '100vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
         }}
      >
         <div
            className='header-wrapper'
            style={{
               width: '80%',
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'row',
               justifyContent: 'space-around',
            }}
         >
            <img id='header-gif' src={lighthouse} alt='soloTraveller' />
            <div>
               <Typography>Still here,</Typography>

               <Typography variant='h1' className='h1'>
                  Connect with me,{' '}
                  <a
                     style={{ color: 'white', textDecoration: 'none' }}
                     href='emailto:ukeshraju@gmail.com'
                  >
                     email
                  </a>
               </Typography>
            </div>
         </div>
      </Box>
   );
}
