import React from 'react';
import { Typography } from '@material-ui/core';

export default function Quotes() {
   return (
      <div
         id='site'
         style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            backgroundColor: '#ffd9e1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <div
            className='site-wrapper'
            style={{
               width: '80%',
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-around',
            }}
         >
            <div className='quotes' style={{ flex: '3' }}>
               <Typography variant='h5' className='text-heading'>
                  📜Favourite Quotes
               </Typography>
               <ul>
                  <li>
                     <Typography>“Do more.”</Typography>
                     <Typography>
                        -{' '}
                        <a
                           style={{ color: 'white', textDecoration: 'none' }}
                           href='https://www.youtube.com/user/caseyneistat'
                        >
                           Casey Neistat
                        </a>
                     </Typography>
                  </li>
                  <br />
                  <li>
                     <Typography>
                        "I'm going to make him an offer he can't refuse."
                     </Typography>
                     <Typography>
                        -{' '}
                        <a
                           style={{ color: 'white', textDecoration: 'none' }}
                           href='https://en.wikipedia.org/wiki/Vito_Corleone'
                        >
                           {' '}
                           Don Vito Corleone
                        </a>
                     </Typography>
                  </li>
               </ul>
            </div>
            <div
               className='music'
               style={{
                  flex: 2,
               }}
            >
               <Typography variant='h5' className='text-heading'>
                  🎧Currently Listening
               </Typography>
               <ul>
                  <li>
                     <Typography>
                        Bigger, Better, Faster, More! -{' '}
                        <a
                           style={{ color: 'white', textDecoration: 'none' }}
                           href='https://open.spotify.com/album/2P8M5eo4zWFD0JJtH4D0iA?si=8PuRu0_9Q0OGYhevjag0xQ&dl_branch=1'
                        >
                           {' '}
                           4 Non Blondes
                        </a>
                     </Typography>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
