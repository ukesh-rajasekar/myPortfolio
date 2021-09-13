import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Work() {
   return (
      <div id='work'>
         <div className='work-wrapper'>
            <Typography variant='h5' className='text-heading'>
               My work
            </Typography>
            <br />
            <Typography>
               Before masters, I was working as a software engineer for two
               years, in India. I worked extensively on Python and automation
               during these period.
            </Typography>
            <br />
            <Typography>
               During my Uni, I got interested in web, data and security. And
               luckily, I got to work on all these areas during my time as a
               Research Assistant to the UNSW School of Marketing and Economics.
               Had great fun with Python, Computer Vision and AI.
            </Typography>
            <br />
            <Typography>
               I am an aspiring full stack developer 👨‍💻. I love to work with
               React, Javascript and Python projects.
            </Typography>
            <br />
            <Typography>
               Read more from{' '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='https://www.linkedin.com/in/ukesh-rajasekar/'
               >
                  LinkedIn
               </a>
               {' , '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='https://github.com/ukesh-rajasekar'
               >
                  git
               </a>
               {'.'}
            </Typography>
            <br />
            <Typography>
               Come, say hi to me{' '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='emailto:ukeshraju@gmail.com'
               >
                  email
               </a>
               {'.'}
            </Typography>
         </div>
      </div>
   );
}
