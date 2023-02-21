import React, { useRef, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/Information.scss';
import ThemeContext from '../context/ThemeContext';
import { Button } from '@mui/material';

const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(ThemeContext);
  const form = useRef(null);
  const { cart } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if(state.cart.length === 0){
      navigate('/');
    }
  }, [state.cart])
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Button variant="outlined" href="#outlined-buttons" component={Link} to='/checkout'>
              Regresar
            </Button>
          </div>
          <div className="Information-next">
            <Button variant="contained" onClick={handleSubmit}>
              Pagar
            </Button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.name}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;