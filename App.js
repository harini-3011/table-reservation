import Navbar from './nav';
//import { useEffect } from 'react';
import './App.css';
import { Helmet } from 'react-helmet-async';
import { Table } from './table';

function App() {
  //One way of including meta tags in react
  // useEffect(()=>
  // {
  //   const metaTag=document.createElement('meta');
  //   metaTag.name='description';
  //   metaTag.content="Little Lemon's Table Reservation page";
  //   metaTag.name='title';
  //   metaTag.content='Table Reservation';
  //   document.head.appendChild(metaTag);
  // }
  //)
  //Another way:npm install react-helmet-async
  <Helmet>
    <meta property='og:title' content="Little Lemon"></meta>
    <meta property='og:image' content="./assets/logo.jpg"></meta>
    <meta property='og:description' content="Little Lemon's Table Reservation"></meta>
  </Helmet>
  
  return (
    <Table/>
      
  );
}

export default App;
