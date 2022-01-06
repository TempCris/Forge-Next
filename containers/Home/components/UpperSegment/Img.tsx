// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'AppConfig/globalData';
// ---Props Types
interface Props {
  img:string;
  cssStyle:string;
}

// ----------COMPONENT----------------------------------------
export default function Img(props:Props): ReactElement {
  const { img, cssStyle } = props;
  return (
    <div className={cssStyle}>
      <img src={img} alt={genericAlt} />
    </div>
  );
}
