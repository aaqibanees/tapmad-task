import React from 'react';
import './App.css';
import Header from "./pages/partials/header";
import Main from "./pages/main";
import Footer from "./pages/partials/footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Footer />
        </div>
    );
};

export default App;