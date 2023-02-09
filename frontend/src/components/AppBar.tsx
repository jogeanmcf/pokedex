import { FaUser } from "react-icons/fa";

export function AppBar(){
  return(
    <nav className="navbar navbar-expand-lg bg-primary p-3 d-flex justify-content-between">
      <span>
        <img src="public/Pokemon-Logo.png" height={50}></img>
      </span>
      <FaUser width={40} height={50} color="white"></FaUser>
    </nav>
  );
}