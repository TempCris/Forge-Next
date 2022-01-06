// ---Dependencys
import { ReactElement } from 'react';
import { ForwardOutlined } from '@ant-design/icons';
// ---Components
import Buttons from 'Cont/Home/components/Button';
import Img from 'Cont/Home/components/UpperSegment/Img';
// ---Images
const buenFin = '/images/home/LowerSegment/BuenFin.png';
const basket = '/images/home/LowerSegment/Basket.webp';// https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif gif del gato

// ----------COMPONENT----------------------------------------
export default function BuenFin(): ReactElement {
  return (
    <div>
      <Img img={buenFin} cssStyle="buen-fin" />
      <Img img={basket} cssStyle="basket" />
      <Buttons nameButton={`DESCUENTOS${<ForwardOutlined />}`} namestyle="MiddleButton" />
    </div>
  );
}
