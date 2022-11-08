import { toast } from 'react-toastify';
const RecipeCard = ({index, name, ingredients, steps, image, setRecipes}) => {
    const handleDeleteRecipe = () => {
        const confirm = window.confirm(`Voulez-vous vraiment supprimer la recette ${name}?`);
        if (confirm) {
            setRecipes((recipes)=> {
                return recipes.filter((recipe, i) => i !== index)
            })
            toast(`La recette ${name} a bien été supprimée !`, {type: "success"});
        }else{
            toast(`La recette ${name} n'a pas été supprimée !`, {type: "error"});
        }
    }
    return ( 
    <div className="card">
        <div className="card-content">
            <h2>{name}</h2>
            <div className="container-list">
                <div>
                    <h3>Ingrédients</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Étapes</h3>
                    <ul>
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button onClick={handleDeleteRecipe}>Delete</button>
        </div>
        <div className="card-image">
            <img src={image} alt={`recette ${name}`} />
        </div>
    </div> 
    );
}

export default RecipeCard;