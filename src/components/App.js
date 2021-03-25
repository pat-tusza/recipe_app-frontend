import React, { useState } from "react"
import RecipeContainer from "./Recipecontainer"
import IngredientContainer from "./IngredientContainer"
import LoginForm from "./LoginForm"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = formInfo => {
    fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(formInfo)
    })
      .then(r=> r.json())
      .then(succesfulLogin=>succesfulLogin ? setIsLoggedIn(true): null)
  }

  const createAccount = accountInfo => {
    fetch("http://localhost:3000/create_account", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(accountInfo)
    })
      .then(r=>r.json())
      .then(result => {

        if(result != false){
          setIsLoggedIn(true)
        }
      })
  }

  return (
    <div>
      {isLoggedIn ? 
       <>
       <RecipeContainer />
       <IngredientContainer />
      </> :
        <LoginForm handleLogin={handleLogin} handleCreateAccount={createAccount}/> 
      }
    </div>
  );
}

export default App;
