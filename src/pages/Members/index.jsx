import React from 'react';
import styles from './index.less';
import { Avatar, Card } from 'antd';
export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page Members/index</h1>
      <Card>
        <Avatar
          shape="square"
          size={100}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div className={styles.name}>Peiling Jia</div>
      </Card>
      <Card>
        <Avatar
          shape="square"
          size={100}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div className={styles.name}>Peiling Jia</div>
      </Card>
      <Card>
        <Avatar
          shape="square"
          size={100}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div className={styles.name}>Peiling Jia</div>
      </Card>
      <Card>
        <Avatar
          shape="square"
          size={100}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div className={styles.name}>Peiling Jia</div>
      </Card>
    </div>
  );
}
