import React from 'react';
import Typography from '@material-ui/core/Typography';
import me from '../constants/mee.png';
import { Box } from '@material-ui/core';

export default function About() {
   return (
      <div
         id='about'
         style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            backgroundColor: '#ffe9a0',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
         }}
      >
         <div
            style={{
               width: '80%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <div
               style={{
                  // width: '50%',
                  // height: '100%',
                  // margin: '3%',
                  flex: 1,
                  textAlign: 'justify',
               }}
            >
               <Typography variant='h5' className='text-heading'>
                  About me
               </Typography>
               <br />
               <Typography>
                  I'm from the southern part of India, Tamil Nadu, the land of
                  temples and festivals 🎡🎠. I moved to Sydney in February 7
                  2020, to pursue my masters import 'module' Information
                  Technology at UNSW. I'm currently in my last term of my uni
                  and will be graduating in November 2021.
               </Typography>
               <br />
               <Typography>
                  Personally, I'm a big film buff who is constantly quoting
                  movies. I love listening to music 🎶 and going to beaches 🌊,
                  and travelling 🚐 a lot. I try to get away to those as much as
                  possible.
               </Typography>
               <br />
            </div>
            <Box
               display={{ xs: 'none', md: 'block', lg: 'block' }}
               style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'relative',
               }}
            >
               <img
                  style={{
                     // position: 'absolute',
                     maxHeight: '700px',
                     // bottom: '0px',
                  }}
                  src={me}
                  alt='soloTraveller'
               />
            </Box>
         </div>
      </div>
   );
}
