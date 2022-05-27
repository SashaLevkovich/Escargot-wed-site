import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

import './App.css';

import Header from './components/Header/Header';
import './assets/scss/Variables.scss';
import Main from './page/Main/Main';
import Footer from './components/Footer/Footer';
import About from './page/About/About';
import AboutPage from './page/AboutPage/AboutPage';
import Menu from './page/Menu/Menu';
import NoMatch from './page/NoMatch/NoMatch';

function App() {
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
    setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
  return (
   <>
       {
           loading ?
               <div className={'load'}>
                   <ClipLoader className={'load'} color={'#96763F'} loading={loading}  size={100} />
               </div>
               :
               <>
                   <Header />
                   <Routes>
        
                       <Route path="/" exact element={ <Main />} />
        
                       <Route path="/about" exact element={<About />}/>
        
                       <Route path="/about/:id" exact element={<AboutPage />}/>
        
                       <Route path="/menu" exact element={<Menu />}/>
        
                       <Route path="*" exact element={<NoMatch />}/>
    
                   </Routes>
                   <Footer />
               </>
              
       }
       
   </>
  );
}

export default App;
