import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <main class="main" id="top">
      <div class="content">

      <Navbar />
      <Outlet />
      <Footer/>


      </div>
    </main>
    </>
  );
}

export default App;
