import { Typography } from '@material-ui/core';
import React from 'react';

export default function Navbar() {
   const ids = ['about', 'work', 'site'];
   const Scroll = (id) => {
      console.log('clicked', id);
      var element = document.getElementById(id);
      console.log(element);

      element.scrollIntoView({
         behavior: 'smooth',
         block: 'end',
         inline: 'nearest',
      });
   };

   return (
      <div className='navbar'>
         <Typography
            className='navlink'
            size='small'
            onClick={() => Scroll(ids[0])}
         >
            About
         </Typography>
         <Typography
            className='navlink'
            size='small'
            onClick={() => Scroll(ids[1])}
         >
            Work{' '}
         </Typography>
         <Typography
            className='navlink'
            size='small'
            onClick={() => Scroll(ids[2])}
         >
            Site
         </Typography>
         <Typography size='small'>
            <a
               href='mailto:ukeshraju@gmail.com'
               style={{ color: 'white', textDecoration: 'none' }}
            >
               Connect with me
            </a>
         </Typography>
      </div>
   );
}
