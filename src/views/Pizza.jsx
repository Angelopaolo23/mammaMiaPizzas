import MyContext from "../MyContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container, Button } from "react-bootstrap";
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';


const PizzaDetail = () => {
    const { id } = useParams();
    const { pizzasInfo, addingCartItems, shoppingCart } = useContext(MyContext);
    const pizzaIndex = pizzasInfo.findIndex(pizza => pizza.id === id);
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center my-4 w-75">
                <Card>
                    <Card.Img variant="top" src={pizzasInfo[pizzaIndex].img} className="detail-pizza-img"/>
                    <Card.Body>
                    <Card.Title className="text-capitalize display-6 fw-bold">{pizzasInfo[pizzaIndex].name}</Card.Title>
                    <hr />
                    <Card.Text>
                        {pizzasInfo[pizzaIndex].desc}
                    </Card.Text>
                    <Card.Text>
                        <div>
                            <div className='h4 fw-bold'>Ingredientes:</div>
                            {pizzasInfo[pizzaIndex].ingredients.map((ingredient, i) => {
                            return (
                                <div className='text-capitalize h6' key={i}><FaPizzaSlice /> {ingredient}</div>
                            )
                            })}
                        </div>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-around">
                            <div className="fw-bold display-6">Precio: {Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(pizzasInfo[pizzaIndex].price)}</div>
                            <div><Button className='btn-danger w-100 mx-2' onClick={() => addingCartItems(shoppingCart, pizzasInfo[pizzaIndex].id, pizzasInfo[pizzaIndex].name, pizzasInfo[pizzaIndex].img, pizzasInfo[pizzaIndex].price)}>Añadir <FaShoppingCart className='mb-1' /></Button></div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
};

export default PizzaDetail;


