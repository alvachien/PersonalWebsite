import React from "react";
import Header from '../components/header';
import Parallax from '../components/parallax';
import Container from '../components/container';

export default function Home() {
  return (
    <div>
      <Header title="alvachien.com"></Header>
      <Parallax title="Alva Chien"></Parallax>
      <Container>
        Test
      </Container>
    </div>
  );
}
