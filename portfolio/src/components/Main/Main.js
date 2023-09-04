import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Container from "./containers/Container";
import { Container as Layout } from "@mui/material";
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import InfiniteScroll from 'react-infinite-scroll-component';

function Main() {
    const [hasMore, setHasMore] = useState(true);
    const [componentsNames, setComponentsNames] = useState([{name: "Container", visible: true}, {name: "Footer", visible: false}]);

    const handleChangeComponents = (index, visible) => {
        let arr = [...componentsNames];
        arr[index] = {...arr[index], visible: visible};
        setComponentsNames(arr);
    }

    const components = [<Container/>, <Footer/>]
    const [items, setItems] = useState([components[0]]);

    const fetchMoreData = (index = 0 ) => {
        if(index !== 0 ){
            setItems([...items, ...components.slice(items.length, index + 1)])
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
        <Layout className="layout">
            <Header componentsNames={componentsNames} fetchMoreData={fetchMoreData}  />

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Ładowanie...</h4>}
            >
                {items.map((item, index) => (
                <Element name={item ? item.type.name : ""} key={index}>{item}</Element>
                ))}
            </InfiniteScroll>
        </Layout>
    );
}

export default Main;