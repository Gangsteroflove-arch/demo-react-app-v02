import {Link} from "react-router-dom";

function Home() {
    return (
      <>
        <p>task on hand v1.0.4</p>
        <p></p>
        <div>
            <input type="text" maxlength={25} placeholder="* add item"/>
            {" "} <button>add</button> {" "} <a>clear</a>
            <p></p>
        </div>

         <Link to="/contactus">Contact Us</Link>
      </>
    );
  }
  
  export default Home;
