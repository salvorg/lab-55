import React from 'react';
import {Ingredient} from "../../types";

interface IngredientWithCount {
  name: string;
  count: number;
  id: number;
}

interface Props {
  priceArr: Ingredient[];
  countArr: IngredientWithCount[];
}

const PriceCounter: React.FC<Props> = ({priceArr, countArr}) => {
  const getTotalPrice = () => {
    let total = 0;

    for (let i = 0; i < priceArr.length; i++) {
      total = total + priceArr[i].price * countArr[i].count;
    }

    return total + 30;
  }

  return (
    <div>
      <p> Price: {getTotalPrice()}</p>
    </div>
  );
};

export default PriceCounter;