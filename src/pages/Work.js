import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Work () {
   return (
      <div id='work'>
         <div className='work-wrapper'>
            <Typography variant='h5' className='text-heading'>
               My work
            </Typography>
            <br />
            <Typography>
               I am currently working as a software engineer at Listing Loop.
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
               I am an aspiring full stack developer 👨‍💻. Eventhough I love to work on
               React/JavaScript, python projects, I am always looking forward to learn
               new techs, solve problems, share knowledge and have a good time while doing it.
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
               {'.'}
            </Typography>
            <br />
            <Typography>
               Projects{' '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='https://ukesh-rajasekar.github.io/look-up/'
               >
                  look-up
               </a>
               {' . '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='https://ukesh-rajasekar.github.io/game-of-life/'
               >
                  game of life
               </a>{' '}
               {' . '}
               <a
                  style={{ color: 'white', textDecoration: 'none' }}
                  href='https://github.com/ukesh-rajasekar'
               >
                  more work
               </a>
               {'.'}
            </Typography>
         </div>
      </div>
   );
}
