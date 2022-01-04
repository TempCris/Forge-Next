// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

// ---Components
import Img from 'Cont/Home/components/Home/UpperSegment/Img';

const img1 = '/images/Icons/icono-menu.webp';
const img2 = '/images/Icons/icono-usuario.webp';

// ----------COMPONENT----------------------------------------
export default function NavBar(): ReactElement {
  return (
    <Row className="nav" justify="space-between">
      <Col>
        <Img img={img1} cssStyle="icons" />
      </Col>
      <Col>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </Col>
      <Col>
        <Img img={img2} cssStyle="icons" />
      </Col>
    </Row>
  );
}
