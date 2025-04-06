//import {BrowserRouter, Routes, Route} from "react-router-dom"
//-- hashrouter - used with GitHub pages
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home";
import ContactUs from "./components/contactus"; 
import NavBar from "./components/navbar";
import "./App.css"
function App() {
  return (
    <>
      
      <HashRouter> 
        <NavBar/>          
        <Routes>      
         <Route path="/" element={<Home/>}/>
         <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
     </HashRouter>    
    </>
  );
}

export default App;
