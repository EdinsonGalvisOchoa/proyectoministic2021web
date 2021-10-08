import React from 'react';
import Header from "../Components/Header";
import Karousel from '../Components/karousel';
import GridCards from "../Components/GridCards";



const Home = () => {
    return (
        <div><Header/>
        <div class="container p-2"><Karousel/></div>
        <div class="container p-5"><GridCards/></div></div>
    )
}
export default Home;

