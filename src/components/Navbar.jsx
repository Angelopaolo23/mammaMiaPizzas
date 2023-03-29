import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import MyContext from "../MyContext";
const NavBar = () => {
    const {totalPrice} = useContext(MyContext);
    const setActive = ({isActive}) => (isActive ? "active" : "inactive");
    return (
        <div className="bg-danger d-flex p-1">
            <Container className="d-flex flex-row justify-content-start me-5 display-6">
                <NavLink className={setActive} to="/">
                    <img className="ms-5" alt="pizza icon" src="./pizzaIcon.png" width="80px"/>
                </NavLink>
                <NavLink className={setActive} to="/">
                    Mamma Mia!
                </NavLink>
            </Container>
            <Container className="d-flex justify-content-end me-5 display-6">    
                <NavLink className={setActive} to="/cart/">
                    <FaShoppingCart className="text-light mb-1 me-2"/>{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(totalPrice)}
                </NavLink>
            </Container>
        </div>
    )
};

export default NavBar;