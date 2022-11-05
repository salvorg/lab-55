import React, {useState} from 'react';
import './App.css';
import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import saladImg from './assets/salad.png';
import baconImg from './assets/bacon.png';
import Burger from "./components/Burger/Burger";
import {Ingredient} from "./types";
import PriceCounter from "./components/PriceCounter/PriceCounter";

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImg},
  {name: 'Cheese', price: 50, image: cheeseImg},
  {name: 'Salad', price: 10, image: saladImg},
  {name: 'Bacon', price: 60, image: baconImg},
];

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: 1},
    {name: 'Cheese', count: 0, id: 2},
    {name: 'Salad', count: 0, id: 3},
    {name: 'Bacon', count: 0, id: 4},
  ]);

  const addIngredient = (id: number) => {
    setIngredients(prev => prev.map(item => {
      if (item.id === id) {
        if (item.count === 0) return {
          ...item,
          count: 1
        }
        if (item.count > 0) {
          return {
            ...item,
            count: item.count++,
          }
        }
      }

      return item;
    }))
  };

  const onDelete = (id: number) => {
    setIngredients(prev => prev.map(item => {
      if (item.id === id)
        if (item.count > 0) {
          return {
            ...item,
            count: item.count--,
          }
        }

      return item;
    }))
  };

  const ingredientsList: React.ReactNode = (
    INGREDIENTS.map((item, index) => (
      <div key={index} className="ingredient">
        <button onClick={() => addIngredient(ingredients[index].id)} className="btn">
          <img src={item.image} width="50px" height="50px" alt="pic"/>
          {item.name}
        </button>
        <span className="count">{ingredients[index].count}</span>
        <button onClick={() => onDelete(ingredients[index].id)}>X</button>
      </div>
    ))
  );

  return (
    <div className="App">
      <div className="main-block">
        <div className="first-block">
          {ingredientsList}
        </div>
        <div className="second-block">
          <Burger state={ingredients}/>
          <PriceCounter priceArr={INGREDIENTS} countArr={ingredients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
