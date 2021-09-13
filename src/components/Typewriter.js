import React, { useEffect, useState, useRef } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Typewriter() {
   const [text, settext] = useState('software engineer. ');
   const [tags, settags] = useState('');
   const [backspace, setbackspace] = useState(false);
   let index = useRef(0);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         if (!backspace) {
            settags((value) => value + text.charAt(index.current));
            index.current += 1;
         } else {
            if (tags.length) {
               index.current -= 1;
               settags(tags.slice(0, index.current));
            }
         }

         if (tags === '') {
            setbackspace(false);
            settags((value) => value + text.charAt(index.current));
            index.current += 1;
         }

         if (tags === 'software engineer. ' || tags === 'web developer. ') {
            setbackspace(true);
            if (text === 'software engineer. ') {
               settext('web developer. ');
            } else {
               settext('software engineer. ');
            }
         }
      }, 100);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [tags, text, backspace]);

   return (
      <div>
         <Typography
            variant='h6'
            style={{
               height: '30px',
               width: '100%',
               paddingTop: '1%',
               position: 'relative',
            }}
         >
            I am a <b>{tags}|</b>
         </Typography>
      </div>
   );
}
