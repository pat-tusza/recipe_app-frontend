import React, { useState, useEffect } from "react"
import RecipeContainer from "./Recipecontainer"
import Recipe from "./Recipe"
import HomePage from "./HomePage"
import { Switch, Route, useHistory } from "react-router-dom";
import DeleteAccountConfirm from "./DeleteAccount.js"
import EditAccountPage from "./EditAccountPage"
import CreateAccountForm from "./CreateAccountForm"
import LoginPage from "./LoginPage"
import EditPassword from "./EditPassword"
import AccountControls from "./AccountControls"
import CreateRecipe from "./CreateRecipe"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    const token = localStorage.getItem("token");
    if (token){
      fetch("http://localhost:3000/me", {
        headers:{
          Authorization: `Bearer ${token}`
        },
      })
        .then(r => r.json())
        .then(user => {
          setCurrentUser(user)
          history.push("/main")
        })
    }
  }, [])

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
        if (result.user){
          setCurrentUser(result.user);
          history.push("/main");
          localStorage.setItem("user", result.user)
          localStorage.setItem("token", result.token)
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
        if (result.user){
          setCurrentUser(result.user);
          history.push("/main");
          localStorage.setItem("user", result.user)
          localStorage.setItem("token", result.token)
        }else{
          console.log(result)
        }
      })
  }

  const deleteAccount = e => {
    history.push("/delete_account")
  }

  const actuallyDelete = e => {
    fetch(`http://localhost:3000/delete_account/${currentUser.id}`, {
      method: "DELETE"
    })
    setCurrentUser(null);
    history.push("/")
  }

  const editAccount = e => {
    history.push("/edit_account")
  }

  const actuallyEdit = data => {
    fetch(`http://localhost:3000/edit_account/${currentUser.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(data => {
        setCurrentUser(data);
        history.push("/main")
      })
  }

  const sendToLogin = () => history.push("/login")
  const sendToCreate = () => history.push("/create_account")
  const sendToEditPassword = () => history.push("/edit_password")
  const sendToCreateRecipe = () => history.push("/create_recipe")
  const sendToMain = () => history.push("/main")

  const editPassword = (data) => {
    fetch(`http://localhost:3000/edit_password/${currentUser.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r=> r.json())
      .then(result => {
          console.log(result);
          history.push("/main")
      })
  }

  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    history.push("/");
  }

    
  return (
    <div>
        {currentUser === null ? (
          <Switch>
            <Route exact path="/">
              <HomePage sendToLogin={sendToLogin} sendToCreate={sendToCreate}/>
            </Route>
            <Route exact path="/login">
              <LoginPage handleLogin={handleLogin}/>
            </Route>
            <Route exact path="/create_account">
              <CreateAccountForm handleCreateAccount={createAccount}/>
            </Route>
          </Switch>
         ) : (
          <Switch>
            <Route exact path="/delete_account">
              <DeleteAccountConfirm handleDelete={actuallyDelete}/>
            </Route>
            <Route exact path ="/edit_account">
              <EditAccountPage user={currentUser} handleEdit={actuallyEdit} sendToEditPassword={sendToEditPassword} />
            </Route>
            <Route exact path="/edit_password">
              <EditPassword handleSubmit={editPassword}/>
            </Route>
            <Route exact path="/create_recipe">
              <CreateRecipe sendToMain={sendToMain}/>
            </Route>
            <Route exact path="/main">
              <AccountControls user={currentUser} handleDelete={deleteAccount} handleEditAccount={editAccount} handleLogout={logOut} />
              <RecipeContainer sendToCreate={sendToCreateRecipe} user={currentUser}/>
            </Route>
            <Route exact path="/recipes/:id">
              <Recipe />
            </Route>
          </Switch>
            )}
    </div>
    
  );
}

export default App;
