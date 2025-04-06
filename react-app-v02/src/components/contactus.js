 function ContactUs() {

    return (
        <>
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <span>first name: </span> <input type="text" maxLength={25} placeholder="* first name"/>
                    <br/>
                    <span>last name: </span> <input type="text" maxLength={25} placeholder=" last name"/>
                    <br/>
                    <span>email:</span> <input type="text" maxLength={100} placeholder="* email"/>
                    <br/>
                    <span>comment:</span> 
                    <br/><textarea rows={10} cols={45} maxLength={100} placeholder="* comment"></textarea>
                    <p></p>
                    <button>submit</button> {" "} <a>clear</a>
                </div>
            </form>
         </div>
         </>
     );
}
    export default ContactUs;