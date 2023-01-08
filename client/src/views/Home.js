import React from "react";
import { Link } from "react-router-dom";
import logo from "../TerroirLogoNoBackground.svg";
// import "./Home.css";

function HomeView(props) {
  return (
    <div className="HomeView">
      <img src={logo} />
      <h1>Terroir</h1>
      <h2>Discover the regional cheeses of France.</h2>
      <h3>The Terroir app is designed with cheese-lovers in mind. </h3>
      <ul>
        <li>
          Search by département, city, and/or milk type to uncover all that
          France's creameries have to offer.
        </li>
        <li>
          Save cheeses you'd like to try, and add the most delicious ones to
          your favorites list.
        </li>
        <li>
          Connect with fellow cheese enthusiasts to get recommendations and
          more.
        </li>
      </ul>

      <h4>Login or register to unlock all of Terroir's features.</h4>
      <Link className="btn btn-outline-success" type="button" to="/login">
        Login/Register
      </Link>
    </div>
  );
}

export default HomeView;
