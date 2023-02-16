

function Checkout (props) {

    return(
        <div>
        <form className="Checkout" onSubmit={(event) => props.handleSubmit(event)}>
          <label htmlfor="firstname">First Name <br></br> <input 
          type="text" 
          name="firstname"
          /></label>
         
         <label htmlfor="lastname">Last Name <br></br> <input 
         type="text" 
         name="lastname"
         /></label>
         
          <label htmlfor="email">Email <br></br> <input 
          type="email"
          name="email"
          /></label>
          
          <label htmlfor="creditCard">Credit Card <br></br> <input 
          type="text"
          name="creditCard"
          /></label>
          
          <label htmlfor="zipcode">Zip Code <br></br> <input 
          type="text" 
          name="zipcode"
          /></label>
          <br></br>
          <input type="submit"></input>
          
        </form>
      </div>
    
    );
    }
    export default Checkout;