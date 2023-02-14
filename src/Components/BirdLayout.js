import BirdCard from "./BirdCard";


//const data = contacts.results
function BirdLayout(props) {

  const data = props.birds;

    return (
        <div>
            {data && data.map((birdy, index) => {
                return <BirdCard birdy = {birdy} />
            })
            }
            <BirdCard />

            {/* <h1>{name.first} {name.last}</h1>
            <p>Home: {phone}</p>
            <p>Mobile: {cell}</p>
            <img alt="profile pic" src={picture.thumbnail}/> */}

        </div>
    )
}

export default BirdLayout;


