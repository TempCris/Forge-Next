// ---Dependencys
import { Col, Row } from 'antd';
import { ReactElement } from 'react';
// ---Components
import UpperSegment from 'Cont/Home/components/Home/UpperSegment/UpperSegment';
import MiddleSegment from 'Cont/Home/components/Home/MiddleSegment/MiddleSegment';
import LowerSegment from 'Cont/Home/components/Home/LowerSegment/LowerSegment';
import NavBar from 'Cont/Home/components/Home/UpperSegment/Navbar';

// ----------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  return (
    <Row className="home-container">
      <Col span={24}>
        <NavBar />
        <UpperSegment />
      </Col>
      <Col span={24}>
        <MiddleSegment />
      </Col>
      <Col span={24}>
        <LowerSegment />
      </Col>
    </Row>
  );
}
