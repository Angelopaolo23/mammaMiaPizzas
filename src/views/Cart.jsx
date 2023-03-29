import { useContext } from "react";
import MyContext from "../MyContext";
import { Button, Container } from "react-bootstrap";


const Cart = () => {
    const {shoppingCart, totalPrice, addingCartItems, sustractingPizzas} = useContext(MyContext);
    return (
        <>
            <Container>
                <h1 className="text-center my-3">Detalles del pedido:</h1>
                {shoppingCart?.map((item, i) => {
                        return (
                            <div key={i}>
                            <Container className="d-flex justify-content-between mt-3">
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <img className="mx-3 rounded shadow" src={item.img} width="70px"/>
                                    <h6 className="text-capitalize fw-bold h4">{item.name}</h6>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <h6 className="mx-5">{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(item.price*item.quantity)}</h6>
                                    <Button className="mx-1 btn-danger" onClick={() => sustractingPizzas(shoppingCart, item.id)}>-</Button>
                                    <h6 className="mx-1">{item.quantity}</h6>
                                    <Button className="mx-1 btn-success" onClick={() => addingCartItems(shoppingCart, item.id, item.name)}>+</Button>
                                </div>
                            </Container>
                            <hr />
                            </div>
                            )
                })}
                
                <div className="display-5 fw-bold">Total: {Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(totalPrice)}</div>
                <Button className="btn-lg btn-warning border m-3">Ir a pagar</Button>

            </Container>
        </>
    )
};

export default Cart;
