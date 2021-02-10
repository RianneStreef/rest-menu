import React from 'react';

// , { useEffect, useState } 
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Categories from './Categories/Categories'

function App() {

  // const [displayCategories, setCategoriesToDisplay]= useState(false)


// setTimeout(function goToCategories () {
//   setCategoriesToDisplay(!displayCategories);
//   useEffect();
// }, 3000);


  // useEffect(() => {
  // // Do nothing
  //     }, [displayCategories]);


  return (
    <div className="App">

      {/* {!displayCategories ? (
        <img src={logo} className="App-logo" alt="logo" /> ) : */}

        
        <div>
          <Header></Header>
          <Categories></Categories>
        </div>
      {/* } */}
    </div>
  );
}






  


export default App;
