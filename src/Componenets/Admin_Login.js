import React from "react";
import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';

function Admin_Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [items, setItems] = useState([]);
  const [result, setStatus] = useState(" no log-in user");

  let history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  function redirect(){
    history.push(`/AdminDashbord/stat_true`);
  }

  const fetchItems = async () => {
    const data = await fetch('/admin');
    const items = await data.json();
    setItems(items);
    console.log("get");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(items[0]?.username === username && items[0]?.password === password){
        setStatus("Log-In Success !");
        redirect();
    }
    else{
        setStatus(" Invalid Username or Password try again !");
    }
  };

  return (
    <div className="container">
      <h2>Please Log In </h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit">Log-in</button>
        </div>
      </form>
      {"Status - '"+result+" '"}
    </div>
  );
}

export default Admin_Login;
