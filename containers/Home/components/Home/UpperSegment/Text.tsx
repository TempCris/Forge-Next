// ---Dependencys
import { ReactElement } from 'react';
import { Html5Filled } from '@ant-design/icons';
// ---Components
import Buttons from 'Cont/Home/components/Home/Button';

// ----------COMPONENT----------------------------------------
export default function Text(): ReactElement {
  return (
    <div className="text">
      <h3>Del negocio te encargas tú, de la tecnología nos preocupamos nosotros</h3>
      <p>
        <span>Olvídate ya de sufrir con freelancers </span>
        que te inventan
        excusas o te quieren cobrar de más por el
        <strong> desarrollo de tu sitio web</strong>
        ,
        plataforma o sistema.
        En
        forge
        nos encargamos de todo
        para que
        <b> sólo </b>
        te preocupes de tu negocio.
      </p>
      <p>
        <span>Comienza ya a disfrutar </span>
        los beneficios de tener un
        <strong> sitio web </strong>
        <Html5Filled />
        sin que se vuelva un dolor de cabeza desde
        <span> $269.00 MX </span>
        al mes.
      </p>
      <Buttons nameButton="AGENDA TÚ CITA" namestyle="UpperButton" />
    </div>
  );
}
