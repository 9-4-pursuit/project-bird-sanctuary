function BirdCards (props) {
    const data = props.birdData
    // const [{ name, amount, img }] = data;
    // console.log(data)
    return (
        <div className="card">
        <div>
        <h1>Title</h1>
        <h3>Price</h3>
        <img> </img>
        <button>Adopt</button>
        </div>
        </div>
    )
}
export default BirdCards;