import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
      <a href="#about">I'm Info</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <p>About</p>
    </div>
  );
  }
function App() {
  return (
    <div>
      <NavBar />
     <Home>Home</Home>
     <About>This is info</About>
    </div>
  );
}

export default App;
