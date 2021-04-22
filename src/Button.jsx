import React, {useState} from 'react';
import More from './More';
import style from './recipe.module.css';

const Button = ({calories, cuisineType, dishType, dietLabels, mealType, healthLabels}) =>{
    const[more, setMore] = useState(false);

    const klick = () => {
        setMore(!more);
    }

    return(
        <div>
            <button className={style.button} onClick={klick}>Show more</button>
            {more ? <More 
                calories={calories}
                cuisineType={cuisineType}
                dishType={dishType}
                dietLabels={dietLabels}
                mealType={mealType}
                healthLabels={healthLabels}
            /> : null}
        </div>
    );
}

export default Button;