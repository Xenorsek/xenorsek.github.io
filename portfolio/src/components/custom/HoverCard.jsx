import { Card } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { determineSeason } from "../../hooks/determineSeason";

function HoverCard (props){
    const cardRef = useRef(null);
    const originPosition = { x: 0, y: 0 };
    const [last, setLast] = useState({
        starTimestamp: new Date().getTime(),
        starPosition: originPosition,
        mousePosition: originPosition
    });
    const season = determineSeason(new Date());

    const config = {
        starAnimationDuration: 1500,
        minimumTimeBetweenStars: 250,
        minimumDistanceBetweenStars: 75,
        glowDuration: 75,
        maximumGlowPointSpacing: 10,
        season:
        {
            winter: {colors:["100, 149, 237", "0, 123, 255", "160, 160, 160"], icon:'❄'},
            spring: {colors:["255, 182, 193", "123, 167, 87"], icon: '✿'},
            autumn: {colors:["255, 165, 0", "210, 105, 30"], icon: '🍃'},
            summer: {colors:["135, 206, 250", "255, 223, 0"], icon: '🏐'}
        },
        sizes: ["1.4rem", "1rem", "0.6rem"],
        animations: ["fall-1", "fall-2", "fall-3"],
      }

    useEffect(() => {
        const handlePointerMove = e => {
            const { left, top, right, bottom } = cardRef.current.getBoundingClientRect();
            const { clientX, clientY } = e;

            if (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom) {
                const mousePosition = { x: clientX - left, y: clientY - top };
            
                const now = new Date().getTime(),
                    hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
                    hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

                if(hasMovedFarEnough || hasBeenLongEnough) {
                    createStar(mousePosition);
                    
                    updateLastStar(mousePosition);
                }
            }
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, [last]);

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

    const appendElement = element => cardRef.current.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => cardRef.current.removeChild(element), delay);

    const withUnit = (value, unit) => `${value}${unit}`,
        px = value => withUnit(value, "px"),
        ms = value => withUnit(value, "ms");

    const calcDistance = (a, b) => {
        const diffX = b.x - a.x,
            diffY = b.y - a.y;
        
        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }

    const calcElapsedTime = (start, end) => end - start;

    let count = 0;

    const createStar = position => {
        const {colors, icon} = config.season[season];
        const star = document.createElement("span"),
              color = selectRandom(colors);
        
        star.className = "star fa-solid fa-sparkle";
        
        star.style.left = px(position.x);
        star.style.top = px(position.y);
        star.style.fontSize = selectRandom(config.sizes);
        star.style.color = `rgb(${color})`;
        star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
        star.style.animationName = config.animations[count++ % 3];
        star.style.starAnimationDuration = ms(config.starAnimationDuration);
        star.innerHTML = icon;
        
        appendElement(star);
      
        removeElement(star, config.starAnimationDuration);
      }

    const updateLastStar = position => {
        last.starTimestamp = new Date().getTime();
        
        last.starPosition = position;
    }

    return <Card {...props} ref={cardRef} >

    </Card>
}
export default HoverCard;