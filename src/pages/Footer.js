import React from 'react';
import Typography from '@material-ui/core/Typography';
import lighthouse from '../assets/balloon.png';

export default function Footer () {
   return (
      <div className='footer'>
         <div className='header-wrapper'>
            <img id='header-gif' src={lighthouse} alt='soloTraveller' />
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
