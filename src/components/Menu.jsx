import { Button, Card, Col, Row } from 'react-bootstrap';
import { useContext } from 'react';
import MyContext from '../MyContext';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const { pizzasInfo, addingCartItems, shoppingCart } = useContext(MyContext);
    const navigate = useNavigate();

    const goToDescription = (id) => {
        navigate(`/pizza/${id}`)
    };
    

    return (
    <>
        <h1 className='text-center mt-2'>Variedades de Pizzas</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
        {pizzasInfo.map((pizza) => (
            <Col key={pizza.id}>
            <Card className='m-3 my-1'>
                <Card.Img variant="top" width="300px" src={pizza.img} />
                <Card.Body className='mx-5'>
                <Card.Title className='text-capitalize display-6 fw-bold'>{pizza.name}</Card.Title>
                <hr />
                <Card.Text>
                    <div>
                        <div className='h5'>Ingredientes:</div>
                        {pizza.ingredients.map((ingredient, i) => {
                        return (
                            <div className='text-capitalize' key={i}><FaPizzaSlice /> {ingredient}</div>
                        )
                        })}
                    </div>
                    <hr />
                    <div className='h2 fw-bold text-center'>{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(pizza.price)}</div>
                </Card.Text>
                <div className='container d-flex justify-content-around'>
                    <Button className='btn-warning w-100 mx-2' onClick={() => goToDescription(pizza.id)}>Ver Más</Button>
                    <Button className='btn-danger w-100 mx-2' onClick={() => addingCartItems(shoppingCart, pizza.id, pizza.name, pizza.img, pizza.price)}>Añadir <FaShoppingCart className='mb-1' /></Button>
                </div>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </>
    );
}

export default Menu;