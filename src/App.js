// import './App.css';
// import Activities from './components/Activities/Activities';
// import Gallery from './components/Gallery/Gallery';
// import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
// import EAB from './components/EAB/EAB';
// import Team from "./components/Team/Team";
// import Foot from "./components/Foot/Foot";
// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Gallery/>
//       <Activities/>
//       <EAB/>
//       <Team/>
//       <Foot/>
//     </div>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Activities from './components/Activities/Activities';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import EAB from './components/EAB/EAB';
import Team from "./components/Team/Team";
import Foot from "./components/Foot/Foot";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div className='appcss'>
      <Navbar/>
      <section id="home"><Home/></section>
      <section id="gallery"><Gallery/></section>
      <section id="activities"><Activities/></section>
      <section id="eab"><EAB/></section>
      <section id="team"><Team/></section>
      <Foot/>
      
    </div>
  );
}

export default App;
