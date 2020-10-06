import React from "react";
import Header from '../components/header';
import Parallax from '../components/parallax';
import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header title="alvachien.com"></Header>
      <Parallax title="Your title" image="bg2.jpg"></Parallax>
      <Container>
        Test
      </Container>
      <Footer />
    </div>
  );
}
