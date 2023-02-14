import { useState, useEffect } from "react";
import bonusItems from "../data/bonusItems";

const Bonus = ({ totalPrice }) => {
  const [bonus, setBonus] = useState([]);

  useEffect(() => {
    const bonusItem =
      totalPrice < 100
        ? 0
        : totalPrice < 300
        ? 1
        : totalPrice < 500
        ? 2
        : totalPrice < 1000
        ? 3
        : 4;
    setBonus(bonusItems.slice(0, bonusItem));
  }, [totalPrice]);

  return (
    <>
      {bonus.map((el, index) => (
        <li style={{ color: "#198754" }} key={index}>
          {el}
        </li>
      ))}
    </>
  );
};
export default Bonus;
