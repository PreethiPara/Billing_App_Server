import React from 'react';
import DisplayProduct from './components/DisplayProduct/DisplayProduct';
import NavBar from './components/NavBar/NavBar';
import ProductControl from './components/ProductControl/ProductControl';
import './index.scss';
function Home(){
    const [query,setQuery]=React.useState<string>("");
    const [category,setCategory]=React.useState<string>("");
    function handleSetQuery(value:string){
        setQuery(value);
    }
    function handleSetCategory(value:string){
        console.log(value+"In index file");
        setCategory(value);
    }
    return (
        <>
            <NavBar handleSetQuery={handleSetQuery}/>
            <ProductControl handleSetCategory={handleSetCategory}/>
            <DisplayProduct queryWord={query} queryCategory={category}/>
        </>
    )
}
export default Home;