// ---Dependencys
import { ReactElement } from 'react';
import { Col, Row } from 'antd';
// ---Components
import Img from 'Cont/Home/components/Home/UpperSegment/Img';
// --- Images
const img1 = '/images/home/MiddleSegment/monitor.webp';
// ----------COMPONENT----------------------------------------
export default function HowWeDidIt(): ReactElement {
  return (
    <Row className="how-we-did-it">
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <h1>¿Como lo logramos?</h1>
        <p>
          Somos una empresa llena de valores, con una gran preocupación hacia
          nuesros clintes. Donde nuestro mayor objetivo es brindarte a ti y a tu
          empresa las mejores herramientas, las cuales son proporcionadas mediante
          nuestros productos y servios los cuales son especializados, únicos y
          exclusivos.
        </p>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Img img={img1} cssStyle="monitor" />
      </Col>
    </Row>
  );
}
