function Home() {

    return (
      <>
        <h1>task on hand</h1>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>add</button> {" "} <a>clear</a>
            <p></p>
        </div>
        <p></p>
        <a>all</a> {" | "}
        <a>complete</a> {" | "}
        <a>in-complete</a> {" | "}
        <p></p>
        <div>
          <span>[] item A -x </span><br/>
          <span>[] item B -x </span><br/>
          <span>[] item C -x </span><br/>
          <span>[x] item D -x </span><br/>
          <span>[x] item E -x </span><br/>
        </div>

         
         <p></p>
         <p>footer 2025</p>
      </>


    );
  }
  
  export default Home;
