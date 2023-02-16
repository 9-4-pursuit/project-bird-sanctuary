
function BirdCards (props) {

return(
<div className="birds">
    <div key={props.id}>
    <h3><strong>{props.name}</strong></h3>
    <img src={props.img} alt={props.name}></img>
    <h5><strong>Price ${props.amount}</strong></h5>
    <button  onClick={()=> props.handleAddCart(props.bird)}>Adopt</button>
    </div>
</div>
);
}
export default BirdCards;