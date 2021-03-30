import React, { useEffect,useState } from "react"
import RecipeContainer from "./Recipecontainer";
import IngredientContainer from "./IngredientContainer";
import RecipePage from "./Recipe";
import LoginForm from "./LoginForm";
import { Switch, Route } from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const handleLogin = formInfo => {
  //   fetch("http://localhost:3000/login",{
  //     method: "POST",
  //     headers:{
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(formInfo)
  //   })
  //     .then(r=> r.json())
  //     .then(succesfulLogin=>succesfulLogin ? setIsLoggedIn(true): null)
  // }
  const [allRecipes, setAllRecipes] = useState([])
  const [recipesToDisplay, setRecipesToDisplay] = useState([])
    
  useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                setAllRecipes(data)
                setRecipesToDisplay(data)
            })
    }, [])

    
  return (
    <div>
       <Switch > 
         <Route exact path= "/main">
           {/* <Header /> */}
          <RecipeContainer recipesToDisplay={recipesToDisplay} />
          <IngredientContainer />
         </Route>

         <Route exact path="/recipes/:id">
           <RecipePage />
         </Route>

       </Switch>
      
    </div>
    // <div>
      
    //   {isLoggedIn ? 
    //    <>
    //    <RecipeContainer />
    //    <IngredientContainer />
    //   </> :
    //     <LoginForm handleLogin={handleLogin} /> 
    //   }
    // </div>
  );
}

export default App;
