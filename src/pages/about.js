import React from "react";
import Header from '../components/header';
import Parallax from '../components/parallax';
import Container from '../components/container';
import Footer from '../components/footer';

export default function About() {
  return (
    <div>
      <Header title="alvachien.com"></Header>
      <Parallax title="Your title" image="bg2.jpg"></Parallax>
      <Container>
      <div style={{ color: `teal` }}>
        <h1>About</h1>
        <p>This is an About page.</p>
      </div>
      </Container>
      <Footer />
    </div>    
  )
}