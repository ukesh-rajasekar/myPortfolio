import Typewriter from '../components/Typewriter';
import headerBg from '../constants/planes.gif';
import rain from '../constants/rain.svg';

import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

export default function Header() {
   return (
      <div
         className='header'
         // style={{
         //    textAlign: 'center',
         //    backgroundColor: '#cceaf7',
         //    height: '100vh',
         //    position: 'sticky',
         //    top: 0,
         //    display: 'flex',
         //    justifyContent: 'space-around',
         //    alignItems: 'center',
         //    backgroundImage: `url(${rain})`,
         //    backgroundSize: 'cover',
         //    backgroundPosition: 'bottom',
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
            <img id='header-gif' src={headerBg} alt='soloTraveller' />
            <div>
               <Typography>Hi! I'm </Typography>

               <Typography variant='h1' className='h1'>
                  Ukesh Rajasekar
               </Typography>
               <Typewriter />
            </div>
         </div>
      </div>
   );
}
