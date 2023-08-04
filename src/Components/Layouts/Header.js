import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <span className={classes.logo}>
          <img
            className={classes["logo-image"]}
            src="https://www.freeiconspng.com/uploads/related-icons-fast-food-icon-forbidden-to-eat-food-icon-hamburger-icon--27.png"
            alt="Logo"
          />
          <h1>ReactMeals</h1>
        </span>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      ;
    </Fragment>
  );
};

export default Header;
