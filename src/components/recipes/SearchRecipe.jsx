import { useEffect, useState } from "react";

const SearchRecipe = ({ setSearch, recipes}) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        const result = e.target.value ? recipes.filter((recipe) => recipe.name.toLowerCase().includes(e.target.value.toLowerCase())) : recipes;
        setSearch(result);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        setSearchValue("");
    }, [recipes])
    return (
        <form onSubmit={(e) => {handleSubmit(e)}} className="search-form">
            <input type="text" name="search" id="search" value={searchValue} onInput={(e) => {handleSearch(e)}} placeholder="Votre recherche" />
        </form>
     );
}
 
export default SearchRecipe;