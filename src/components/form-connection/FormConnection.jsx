import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormConnection = ({firstName, setFirstName}) => {
    const [crendentials, setCrendentials] = useState("")
    const [isEmpty, setIsEmpty] = useState(false)

    const navigate = useNavigate();

    const handleChange = (event) => {
        setCrendentials(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!crendentials) {
            setIsEmpty(true)
        }else{
            setIsEmpty(false)
            setFirstName(crendentials);
            setCrendentials('');
            navigate("/recipes");
        }
    }
    return (
        <section className="form-connection">
            <div className="form-connection-left">
                <h1>Bienvenue sur votre carnet de recettes</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="firstName" value={crendentials} onInput={(e) => handleChange(e)} placeholder="Prénom"/>
                    <input type="submit" value="Connexion" />
                </form>
                {isEmpty && <span style={{color: "red", fontFamily: "sans-serif", fontSize: 13 + "px"}}>Erreur : Veuillez renseigner votre prénom</span>}
            </div>
            <div className="form-connection-right">
                <img src="/french-food.jpeg" alt="Recette" />
            </div>
        </section>
     );
}
 
export default FormConnection;