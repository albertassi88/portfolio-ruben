import React from 'react';
import NavBar from '../components/NavBar';
import MinBurgerNavBar from '../components/MinBurgerNavBar';
import MainHome from '../components/MainHome';

function Home() {
  return (
    <>
      <MinBurgerNavBar />
      <NavBar />     
      <MainHome />
    </>
  );
}

export default Home;
