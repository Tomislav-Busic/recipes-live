import Button from './Button';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients, cuisineType, dishType, dietLabels, mealType, healthLabels}) => {
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>
                    <li>{ingredient.text}</li>
                    )}
            </ol>
            <img className={style.image} src={image} alt="image"/>    
            <Button 
            calories={calories}
            cuisineType={cuisineType}
            dishType={dishType}
            dietLabels={dietLabels}
            mealType={mealType}
            healthLabels={healthLabels}
            />
        </div>
    );
}

export default Recipe;