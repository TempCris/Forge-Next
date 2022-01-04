// ---Dependencys
import { ReactElement } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

// ----------COMPONENT----------------------------------------
export default function DarkMode(): ReactElement {
  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  );
}
