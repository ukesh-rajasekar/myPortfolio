import Typewriter from '../utils/Typewriter';
import headerBg from '../assets/planes.gif';
import Typography from '@material-ui/core/Typography';

export default function Header () {
   return (
      <div className='header'>
         <div className='header-wrapper'>
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
