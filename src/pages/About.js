import React from 'react';
import Typography from '@material-ui/core/Typography';
import me from '../constants/mee.png';

export default function About() {
   return (
      <div id='about'>
         <div className='about-wrapper'>
            <div
               style={{
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
            <div className='image'>
               <img
                  style={{
                     maxHeight: '570px',
                  }}
                  src={me}
                  alt='soloTraveller'
               />
            </div>
         </div>
      </div>
   );
}
