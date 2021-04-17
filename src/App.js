import React from 'react';
import { Button } from './components/Button';

export const App = () => {

  return (
    <div>
        <h2>Estos son botones mostrados con html simple</h2>
        <h3>Para mostralos tengo que poner a mano uno por uno su nombre y su clase</h3>
        <button className="rojo">rojo</button>
        <button className="amarillo">amarillo</button>
        <button className="verde">verde</button>
        <button className="naranja">naranja</button>

        <h2>Estos son botones están optimizados por la ténicas de componentes</h2>
        <h3>El fragmento de html que codificamos es solo una linea y la repetimos las veces que queramos</h3>
        <Button color={ 'rojo' } />
        <Button color={ 'amarillo' } />
        <Button color={ 'verde' } />
        <Button color={ 'naranja' } />
    </div>
  )
}
