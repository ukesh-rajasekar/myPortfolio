import React from 'react';
import Typography from '@material-ui/core/Typography';
import lighthouse from '../constants/lighthouse.gif';
import { Box } from '@material-ui/core';

export default function Footer() {
   return (
      <div
         className='header'
         // style={{
         //    textAlign: 'center',
         //    backgroundColor: '#87cdf4',
         //    height: '100vh',
         //    position: 'sticky',
         //    top: 0,
         //    display: 'flex',
         //    justifyContent: 'space-around',
         //    alignItems: 'center',
         // }}
      >
         <div
            className='header-wrapper'
            style={{
               width: '80%',
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               justifyContent: 'space-around',
            }}
         >
            {/* <Box display={{ xs: 'none', sm: 'block' }}> */}
            <img id='header-gif' src={lighthouse} alt='soloTraveller' />
            {/* </Box> */}
            <div>
               <Typography>Still here,</Typography>

               <Typography variant='h1' className='h1'>
                  Connect with me -{' '}
                  <a
                     style={{ color: 'white', textDecoration: 'none' }}
                     href='https://www.linkedin.com/in/ukesh-rajasekar/'
                  >
                     LinkedIn
                  </a>
                  {' . '}
                  <a
                     style={{ color: 'white', textDecoration: 'none' }}
                     href='emailto:ukeshraju@gmail.com'
                  >
                     email
                  </a>
               </Typography>
            </div>
         </div>
      </div>
   );
}
