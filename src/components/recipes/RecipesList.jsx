import FormRecipe from "./FormRecipe";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import SearchRecipe from "./SearchRecipe";
import { Navigate } from "react-router-dom";

const RecipesList = ({firstName}) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState([...recipes]);

    const displayRecipe = (recipe, index) => {
        return <RecipeCard key={index} index={index} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} image={recipe.image} setRecipes={setRecipes}/>
    }
    useEffect(() => {
        setSearch([...recipes]);
    }, [recipes])
    if(!firstName){
        return (
            <Navigate to="/"></Navigate>
        )
    }
    return ( 
        <section className="recipe-list">
            <nav>
                <SearchRecipe setSearch={setSearch} recipes={recipes}/>
                <FormRecipe setRecipes={setRecipes}/>
            </nav>
            <div className="recipe-list-map">
                {search.map((recipe, index) => displayRecipe(recipe, index))}
            </div>
        </section>
     );
}
 
export default RecipesList;