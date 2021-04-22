import React, {useState} from 'react';
import Health from './Health';
import style from './recipe.module.css';

const More = ({calories, cuisineType, dishType, dietLabels, mealType, healthLabels}) => {
    const [health, setHealth] = useState(false);

    const klick = () => {
        setHealth(!health);
    }
    
    return(
        <div>
            <p>Cuisine Type: <span>{cuisineType}</span></p>
            <p>Meal Type: <span>{mealType}</span></p>
            <p>Dish Type: <span>{dishType}</span></p>
            <p>Diet: <span>{dietLabels}</span></p>
            <p>Calories: <span>{calories}</span></p>
            <button className={style.yellow} onClick={klick}>Health</button>
            {health ? <Health 
                    healthLabels={healthLabels}
            /> : null}
        </div>
    );
}
 
export default More;