// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Components
import DiscountOfTheMonth from 'Cont/Home/components/Home/LowerSegment/Carousel/DiscountOfTheMonth';
// import BuenFin from 'Comp/Home/LowerSegment/BuenFin';
import SuccessStories from 'Cont/Home/components/Home/LowerSegment/SuccessStories';
// --- Others
import { success } from 'Others/SuccessData';

// ----------COMPONENT----------------------------------------
export default function LowerSegment(): ReactElement {
  return (
    <Row>
      <Col span={24}>
        <DiscountOfTheMonth />
      </Col>
      <Col className="success-container" span={24}>
        <h1>
          CASOS DE EXITO.
          <hr color="#00f8da" />
        </h1>
        {
        success.map(
          (element) => (
            <SuccessStories
              styles={element.styles}
              stylesContent={element.stylesContent}
              urlImg={element.urlImg}
              name={element.name}
              mainParragraph={element.mainParragraph}
              BoldText={element.BoldText}
            />
          )
        )
        }
      </Col>
    </Row>
  );
}
