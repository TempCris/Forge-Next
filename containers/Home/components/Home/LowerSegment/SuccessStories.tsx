// ---Dependencys
import {
  Avatar, Rate, Progress, Row, Col
} from 'antd';
import { ReactElement } from 'react';
// --- Types
interface Props {
  styles: string;
  stylesContent:string;
  urlImg: string;
  name: string;
  mainParragraph: string;
  BoldText:string;
}

// ----------COMPONENT----------------------------------------
export default function SuccessStories(props:Props): ReactElement {
// ---consts, hooks, states
  const {
    styles, stylesContent, urlImg, name, mainParragraph, BoldText
  } = props;
  return (
    <Row className={stylesContent}>
      <Col className={styles} xs={24} sm={24} md={20} lg={18} xl={16} xxl={16}>
        <Avatar
          size={65}
          src={urlImg}
        />
        <h1>{name}</h1>
        <p>
          {mainParragraph}
          <strong>
            {BoldText}
          </strong>
        </p>
        <Col className="rate" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          <Rate disabled defaultValue={5} />
          <Progress
            type="circle"
            strokeColor={{
              '0%': '#8c00fb78',
              '100%': '#06ffd2b8'
            }}
            percent={100}
            format={() => '100%'}
          />
          <b>Satisfacción</b>
        </Col>
      </Col>
    </Row>
  );
}
