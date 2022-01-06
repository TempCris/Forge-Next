// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Img from 'Cont/Home/components/UpperSegment/Img';
import List from 'Cont/Home/components/MiddleSegment/List';
import HowWeDidIt from 'Cont/Home/components/MiddleSegment/HowWeDidIt';
import CarouselMiddle from 'Cont/Home/components/MiddleSegment/CarouselMiddle'
import Buttons from 'Cont/Home/components/Button';
// --- Images
const lapTop = '/images/home/MiddleSegment/lapTop.webp';
const superHeroF = '/images/home/MiddleSegment/SuperHeroF.webp';// https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif gif del gato

// ----------COMPONENT----------------------------------------
export default function UpperMiddle(): ReactElement {
  return (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
        <Img img={lapTop} cssStyle="padlock" />
      </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
        <List />
      </Col>
      <Col span={24}>
        <p className="middle-paragraph">
          Son cosas a las que todo Sitio web esta propenso y aun más si no
          cuentas con un equipo especializado.
        </p>
      </Col>
      <Col span={24}>
        <Img img={superHeroF} cssStyle="super-hero-f" />
      </Col>
      <Col span={24}>
        <p className="second-middle-paragraph">
          NO TE PREOCUPES MÁS POR ESTO... En FORGE nos encargamos de que no pase
          más esto...
        </p>
      </Col>
      <Col span={24}>
        <HowWeDidIt />
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
        <CarouselMiddle />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <p className="third-middle-paragraph">
          ¿Te gustaría saber más  sobre como
          Construir tu propia página web?
        </p>
        <Buttons nameButton="APRENDE CON NOSOTROS." namestyle="middle-button" />
      </Col>
    </Row>
  );
}
