import { useEffect, useRef, useState } from "react";

const FollowCursorBackgroundEffect = () =>{
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const boxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.pageX, y: e.pageY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      useEffect(() => {
        if (boxRef.current) {
            boxRef.current.animate({
                top: `${position.y}px`,
                left: `${position.x}px`
            }, {duration: 3000, fill: "forwards"});
        }
      }, [position]);

    return <div id="follow-cursor-background-effect" ref={boxRef} />
}
export default FollowCursorBackgroundEffect;