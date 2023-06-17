import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import data from './components/data';
import Cards from './components/cards';

function App() {
  const placesData = data.map(place => {
    return (
      <Cards
        key={place.id}
        {...place}
      />
    )
  })


  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        <div className='cards--container'>
          {placesData}
        </div>
      </div>
    </div>
  );
}

export default App;
