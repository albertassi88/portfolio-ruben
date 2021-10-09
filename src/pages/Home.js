import React from 'react';
import NavBarHome from '../components/NavBarHome';
import MinBurgerNavBar from '../components/MinBurgerNavBar';
import MainHome from '../components/MainHome';

function Home() {
  return (
    <>
      <MinBurgerNavBar />
      <NavBarHome />     
      <MainHome />
    </>
  );
}

export default Home;
