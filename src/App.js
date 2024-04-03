import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import {action,orginals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Originals'/> 
      <RowPost url={action} title='Actions' isSmall/> 
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/> 
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/> 
      <RowPost url={RomanceMovies} title='Romance Movies' /> 
      <RowPost url={Documentaries} title='Documentaries' isSmall/> 
      <Footer/>
    </div>
  );
}

export default App;
