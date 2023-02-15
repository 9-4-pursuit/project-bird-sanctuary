import React from "react";
import BirdCard from "./BirdCard";


//const data = contacts.results
function BirdLayout(props) {

  const data = props.birds;

    return (
        <div className="layout">
            {data && data.map((birdy, index) => {
                return <BirdCard birdy = {birdy} />
            })
            }


        </div>
    )
}

export default BirdLayout;


