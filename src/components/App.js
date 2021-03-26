import React, { useState } from "react"
import RecipeContainer from "./Recipecontainer"
import IngredientContainer from "./IngredientContainer"
import LoginForm from "./LoginForm"
import { Switch, Route, useHistory } from "react-router-dom";
import DeleteAccountConfirm from "./DeleteAccount.js"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
        if (result.username){
          setCurrentUser(result);
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
      .then(result => {
        if (result.username){
          setCurrentUser(result);
          history.push("/main");
        }else{
          console.log(result)
        }
      })
  }

  const deleteAccount = e => {
    history.push("/deleteAccount")
  }

  const actuallyDelete = e => {
    fetch(`http://localhost:3000/delete_account/${currentUser}`, {
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
          <RecipeContainer user={currentUser}/>
          <IngredientContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
