import { createTheme } from '@material-ui/core';

const Theme = createTheme({
   typography: {
      fontSize: 20,
      fontFamily: 'serif',
      h1: {
         fontSize: '5rem',
         fontFamily: ['Dancing Script', 'cursive'].join(','),
      },
      h5: {
         fontStyle: 'italic',
         fontFamily: 'serif',
      },
   },
   spacing: 1,
});

export default Theme;
