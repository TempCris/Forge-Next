// ---Dependencys
import { ReactElement } from 'react';
import { Button } from 'antd';
// ---Interfaces
interface Props {
    nameButton:string;
    namestyle:string;
}

// ----------COMPONENT----------------------------------------
export default function Buttons(props:Props): ReactElement {
  const { nameButton, namestyle } = props;
  return (
    <div className={namestyle}>
      <Button type="primary">{nameButton}</Button>
    </div>
  );
}
