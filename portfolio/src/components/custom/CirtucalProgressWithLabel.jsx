import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const CircularProgressWithLabel = ({value, color}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if(value){
            if(progress !== value){
                const timer = setInterval(() => {
                    setProgress((prevProgress) => (prevProgress > value ? 0 : prevProgress + 5));
                }, 50);
                return () => {
                clearInterval(timer);
                };
            }
        }
    },[value, progress])

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" color={color} value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  export default CircularProgressWithLabel;