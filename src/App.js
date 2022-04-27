import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GlobalState from './global/GlobalState';
import Main from './main/Main';

const App = () => {

    return (
        <GlobalState id="app-container">
            <Header />
            <Main />
            <Footer />
        </GlobalState>
    )

}

export default App;