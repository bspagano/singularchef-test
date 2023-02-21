import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/Checkout.scss';
import ThemeContext from '../context/ThemeContext';

const Checkout = () => {
    const { state, removeFromCart} = React.useContext(ThemeContext);
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        const quantityCount = state.cart.reduce(
            (accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price),
            0
        );
        setQuantity(quantityCount);
    }, [state.cart])
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de Pedidos:</h3>
                    {
                        state.cart.map(element => {
                            return(
                                <div className="Checkout-item" key={element.id}>
                                    <div className="Checkout-element">
                                        <h4>{element.name}</h4>
                                        <span>$ {element.price * element.quantity} </span>
                                    </div>
                                    <button type="button" onClick={() => removeFromCart(element)}>
                                        Eliminar
                                    </button>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="Checkout-sidebar">
                <h3>Precio Total: ${quantity}</h3>
                <Link to="/checkout">
                    <button type="button">Continuar pedido</button>
                </Link>
            </div>
        </div>
    );
}

export default Checkout;