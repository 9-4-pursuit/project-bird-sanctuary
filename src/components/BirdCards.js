
// This cpmonent is responsible for rendering the individual bird cards that display the name, image price and adopt button.  It takes bird datas as props and maps over the array of birds to display each bird card.  When adopt button is clicked it triggers the add to card function which is passed down as a prop from the App Component.  This function updates the cart state in App component by adding the selected bird to cart.


function BirdCards (props) {
    const data = props.birdData
    console.log(data)
  
    return (
        <div className="card">
            {data.map((bird) => {
          return (
            <div key={bird.id} className="birds">
              <li>
                <p>{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img className = "img" src={bird.img} alt="birdimage" /><br></br>
              <button>Adopt Me</button>
              </li>
              </div>
          );
        })}
        </div>
)
}
export default BirdCards

