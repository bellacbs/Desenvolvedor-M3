import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './main/Main';

const App = () => {

    return(
        <div id="app-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )

}

export default App;