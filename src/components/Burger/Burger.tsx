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
  const ingredients = () => {
    const arr = [];
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[j].count; j++) {
        if (state[j].count !== 0) {
          const obj = {name: state[j].name, id: state[j].id};
          arr.push(obj);
        }
      }
    }
    console.log(arr);
    return arr;
  };

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingredients().map(item => (<div key={item.id} className={item.name}></div>))}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;