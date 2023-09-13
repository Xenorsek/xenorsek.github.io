import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Box, Container } from "@mui/material";
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollTop from "../custom/BacktToTopButton";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Experience from "./containers/Experience/Experience";

function Main() {
    const [hasMore, setHasMore] = useState(true);
    const [componentsNames, setComponentsNames] = useState([
        {name: "About", visible: true},
        {name: "Projects", visible: true},
        {name: "Experience", visible: false},
        {name: "Footer", visible: false}
    ]);

    const handleChangeComponents = (index, visible) => {
        let arr = [...componentsNames];
        arr[index] = {...arr[index], visible: visible};
        setComponentsNames(arr);
    }

    const components = [<About/>, <Projects/>, <Experience/>, <Footer/>]
    const [items, setItems] = useState(components.slice(0,2));

    const fetchMoreData = (index = 0 ) => {
        if(index !== 0 ){
            setItems([...items, ...components.slice(items.length, index + 1)])
            for(let i = 0; i <= index; i++){
                handleChangeComponents(i, true);
            }
        }
        else{
            if(components.length > items.length){
                let nextIndex = items.length;
                handleChangeComponents(nextIndex, true);
                setItems([...items, components[nextIndex]]);
            }
            else{
                setHasMore(false);
            }
        }
      };

    return(
        <Container>
            <Header componentsNames={componentsNames} fetchMoreData={fetchMoreData}  />
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Ładowanie...</h4>}
            >
                <Box className="container">
                    {items.map((item, index) => (
                    <Element name={componentsNames[index].name} key={index}>{item}</Element>
                    ))}
                </Box>
            </InfiniteScroll>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Container>
    );
}

export default Main;