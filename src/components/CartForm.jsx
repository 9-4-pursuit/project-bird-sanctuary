const CartForm = ({ birds, setBirds }) => {
  function handleSubmit(e) {
    e.preventDefault();

    birds.length < 1
      ? alert("Please select your favorite bird.")
      : alert("You have adopted birds. Thank you!");
    setBirds([]);
    e.target.reset();
  }
  return (
    <>
      <div className="section-center" id="form">
        <form className="order-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </label>
          <label htmlFor="laststName">
            <input id="lastName" type="text" placeholder="Last Name" required />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" placeholder="Email" required />
          </label>
          <label htmlFor="zipCode">
            <input
              id="zip"
              name="zip"
              type="text"
              pattern="[0-9]*"
              placeholder="Zip Code"
              required
            />
          </label>
          <button type="submit" className="btn btn-form">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};
export default CartForm;
