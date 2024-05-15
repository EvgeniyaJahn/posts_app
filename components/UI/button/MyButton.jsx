import React from "react";
import classes from "./MyButton.module.css";

//Ispolzujem props children dla peredachi teksta knopki iz roditelskoj komponenty
// v propsy mozhno propustit tolko props
//a v button teg dobavit {props.children}
//dast odinakovij effekt
//propsy kak disabled nuzhno peredavat iz vne poetomu
//disabled={true|false}
//razmeshajem v roditelskoj komponente i peredajem informaciju o nej propsami
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};
export default MyButton;
