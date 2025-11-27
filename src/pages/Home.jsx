import React from 'react'
import Navbar from '../Layout/Navbar'
import Product from './Product';
import Services from './Services';
import Footer from '../Layout/Footer';
import Contact from './Contact';
import About from './Hero';
import Trusted from './Trusted';

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Product />
      <Services />
      <Trusted/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
