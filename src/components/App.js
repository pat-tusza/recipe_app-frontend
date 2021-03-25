import React, { useState } from "react"
import RecipeContainer from "./Recipecontainer"
import IngredientContainer from "./IngredientContainer"
import LoginForm from "./LoginForm"
import { Switch, Route, useHistory } from "react-router-dom";
import DeleteAccountConfirm from "./DeleteAccount.js"

function App() {
  const [currentUserId, setCurrentUserId] = useState(0);
  const history = useHistory();

  const handleLogin = formInfo => {
    fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(formInfo)
    })
      .then(r=> r.json())
      .then(result => {
        if (Number.isFinite(result)){
          setCurrentUserId(result);
          history.push("/main");
        }else{
          console.log(result)
        }
      })
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
      .then(result => Number.isFinite(result) ? history.push("/main"): console.log(result))
  }

  const deleteAccount = e => {
    history.push("/deleteAccount")
  }

  const actuallyDelete = e => {
    fetch(`http://localhost:3000/delete_account/${currentUserId}`, {
      method: "DELETE"
    })
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginForm handleDelete={deleteAccount} handleLogin={handleLogin} handleCreateAccount={createAccount}/>
        </Route>
        <Route exact path="/delete_account">
          <DeleteAccountConfirm handleDelete={actuallyDelete}/>
        </Route>
        <Route exact path="/main">
          <RecipeContainer />
          <IngredientContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
