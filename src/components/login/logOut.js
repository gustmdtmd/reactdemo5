import { useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

const LogOut = () => {
  //const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('Authorizaton');
    localStorage.removeItem('username');
    localStorage.clear();
    // navigate("/");
    window.location.replace('/');
  });
};

export default LogOut;
