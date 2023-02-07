import React from "react";
import { Link } from "react-router-dom";
import logo from "../TerroirLogoNoBackground.svg";
import { MapContainer, TileLayer, Marker, Popur } from "react-leaflet";
// import "./Home.css";

function HomeView(props) {
  return (
    <div className="HomeView">
      <div className="row">
        <img id="homeLogo" className="mx-auto" src={logo} />
        <h1>Terroir</h1>
        <h2>Discover the regional cheeses of France.</h2>
      </div>
      <div className="row py-5">
        <h2>The Terroir app is designed with cheese-lovers in mind. </h2>
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
      </div>
      <div className="row">
        <MapContainer
          id="map"
          center={[47, 2.2137]}
          zoom={6}
          scrollWheelZoom={false}
          // style={{ height: "800px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>

      <div className="row">
        <h4>Login or register to unlock all of Terroir's features.</h4>
        <Link
          className="btn btn-outline-variant mx-auto mt-2"
          type="button"
          to="/login"
        >
          Login/Register
        </Link>
      </div>
    </div>
  );
}

export default HomeView;
