// ---Dependencys
import { ReactElement } from 'react';
import { ForwardOutlined } from '@ant-design/icons';
// ---Components
import Buttons from 'Cont/Home/components/Home/Button';
import Img from 'Cont/Home/components/Home/UpperSegment/Img';
// ---Images
const img1 = '/images/home/LowerSegment/BuenFin.png';
const img2 = '/images/home/LowerSegment/Basket.webp';// https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif gif del gato

// ----------COMPONENT----------------------------------------
export default function BuenFin(): ReactElement {
  return (
    <div>
      <Img img={img1} cssStyle="buen-fin" />
      <Img img={img2} cssStyle="basket" />
      <Buttons nameButton={`DESCUENTOS${<ForwardOutlined />}`} namestyle="MiddleButton" />
    </div>
  );
}
