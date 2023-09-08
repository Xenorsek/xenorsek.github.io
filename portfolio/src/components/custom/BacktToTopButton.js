import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Scroll from 'react-scroll';
function ScrollTop(props) {
    const { children } = props;
    const scroll = Scroll.animateScroll;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
  
    const handleClick = () => {
      scroll.scrollToTop();
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }
  export default ScrollTop;