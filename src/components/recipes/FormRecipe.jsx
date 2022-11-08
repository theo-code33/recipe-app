import { useState } from "react";
import { toast } from 'react-toastify';

const FormRecipe = ({setRecipes}) => {
    const [crendentials, setCrendentials] = useState({
        name: "",
        ingredients: "",
        steps: "",
        image: "",
    })

    const handleChange = (event) => {
        if (event.target.name === "ingredients" || event.target.name === "steps") {
            setCrendentials({
                ...crendentials,
                [event.target.name]: event.target.value.split(","),
            })
        }else if(event.target.name === "image"){
            setCrendentials({
                ...crendentials,
                [event.target.name]: URL.createObjectURL(event.target.files[0]),
            })
        }else{
            setCrendentials({
                ...crendentials,
                [event.target.name]: event.target.value
            });
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setRecipes((recipes) => {
            return [...recipes, crendentials]
        })
        toast(`La recette ${crendentials.name} a bien été ajoutée !`, {type: "success"});
        setCrendentials({
            name: "",
            ingredients: "",
            steps: "",
            image: "",
        })
        event.target.reset();
    }
    return (
        <>
        <h3>Ajouter une nouvelle recette</h3>
        <form onSubmit={(e) => {handleSubmit(e)}} className="form-recipe">
            <input type="text" required name="name" value={crendentials.name} onInput={(e) => {handleChange(e)}} placeholder="Nom de la recette"/>
            <label htmlFor="ingredients">Séparer chaque Ingrédient d'une virgule (ex : Patate, Fromage, etc...)</label>
            <input type="text" required name="ingredients" value={crendentials.ingredients} onInput={(e)=>{handleChange(e)}} placeholder="Ingrédients"/>
            <label htmlFor="steps">Séparer chaque Étape d'une virgule</label>
            <input type="text" required name="steps" value={crendentials.steps} onInput={(e)=>{handleChange(e)}} placeholder="Étapes"/>
            <label htmlFor="image">Ajouter l'image de votre recette</label>
            <input type="file" required name="image" id="image" onInput={(e)=>{handleChange(e)}} />
            <input type="submit" value="Ajouter" />
        </form>
        </>
     );
}
 
export default FormRecipe;