import React, {} from 'react';
import './Burger.css';

interface IngredientWithCount {
  name: string;
  count: number;
  id: number;
}

interface Props {
  state: IngredientWithCount[];
}

const Burger: React.FC<Props> = ({state}) => {
  const arr = [];

  for (let i = 0; i < state.length; i++) {
    const forCount = state.filter(item => item.id === i + 1);

    if (forCount[0].count > 0) {
      for (let j = 0; j < forCount[0].count; j++) {
        arr.push(forCount[0]);
      }
    }
  }

  console.log(arr);

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {arr.map((item, index) => <div key={index} className={item.name}></div>)}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;