// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

// ---Components
import Img from 'Cont/Home/components/UpperSegment/Img';

const menu = '/images/Icons/icono-menu.webp';
const usuario = '/images/Icons/icono-usuario.webp';

// ----------COMPONENT----------------------------------------
export default function NavBar(): ReactElement {
  return (
    <Row className="nav" justify="space-between">
      <Col>
        <Img img={menu} cssStyle="icons" />
      </Col>
      <Col>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </Col>
      <Col>
        <Img img={usuario} cssStyle="icons" />
      </Col>
    </Row>
  );
}
