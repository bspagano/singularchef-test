import React, { useContext } from 'react';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../sass/Success.scss';
import ThemeContext from '../context/ThemeContext';

const Success = () => {
  const { state } = useContext(ThemeContext);
  const buyer = state.buyer[0];
  console.log('buyer', buyer)
  const location = useGoogleAddress(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
}

export default Success;