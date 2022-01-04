// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import Text from 'Cont/Home/components/Home/UpperSegment/Text';
import Img from 'Cont/Home/components/Home/UpperSegment/Img';
// --- Images
const forgeBlancoNegroImg = '/images/home/UpperSegment/forgeBlancoNegro.png';
const threeScreensImg = '/images/home/UpperSegment/threeScreens.webp';
const girlWithLaptopImg = '/images/home/UpperSegment/girlWithLaptop.webp';
// ----------COMPONENT----------------------------------------
export default function UpperSegment(): ReactElement {
  return (
    <Row>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
        <Text />
      </Col>
      <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
        <Img cssStyle="forge-icon" img={forgeBlancoNegroImg} />
      </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
        <Img cssStyle="center-80" img={threeScreensImg} />
      </Col>
      <Col span={24}>
        <Col span={24}>
          <Img
            cssStyle="laptop-girl"
            img={girlWithLaptopImg}
          />
        </Col>
        <Col span={24}>
          <p className="paragraph">
            Olvidate del diseño, hosting, servidores, SSL , etc. ¡EXPERTOS en
            soluciones, no en EXCUSAS!
            <br />
            Sin importar la experiencia , y ¡SIN PROGRMAR UNA LINEA DE CÓDIGO!
          </p>
        </Col>
      </Col>
    </Row>
  );
}
