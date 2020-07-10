import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carousel from './components/carousel/carousel';
const Home = lazy(() =>
    import ('./modules/home'))
const NavigationBar = lazy(() =>
    import ('./components/navBar/navigationBar'));
const Tech = lazy(() =>
    import ('./components/tech'));
const News = lazy(() =>
    import ('./components/news'));
const Contact = lazy(() =>
    import ('./components/contact'));
const Footer = lazy(() =>
    import ('./components/footer/footer'));

function App() {
    return ( <
        div className = "App" >
        <
        Suspense fallback = { < h1 > STILL LOADING... < /h1>}> <
            div className = "body" >
            <
            Router >
            <
            NavigationBar / >
            <
            Carousel / >
            <
            Route path = "/"
            exact component = { Home }
            /> <
            Route path = "/technology"
            component = { Tech }
            /> <
            Route path = "/news"
            component = { News }
            /> <
            Route path = "/contact"
            component = { Contact }
            /> <
            /Router> <
            /div> <
            Footer / >
            <
            /Suspense> <
            /div>
        );
    }

    export default App;