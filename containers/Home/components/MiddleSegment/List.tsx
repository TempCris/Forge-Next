// ---Dependencys
import { ReactElement } from 'react';

// ----------COMPONENT----------------------------------------
export default function List(): ReactElement {
  return (
    <div className="list-box">
      <ul className="list">
        <li>SECUESTROS DE DOMINIOS</li>
        <li>COSTOS EXECIVOS</li>
        <li>PROYECTOS MAL REALIZADOS</li>
        <li>ESTAFAS</li>
        <li>Y MÁS....</li>
      </ul>
    </div>
  );
}
