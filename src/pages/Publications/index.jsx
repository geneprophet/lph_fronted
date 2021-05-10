import React from 'react';
import styles from './index.less';
import ListBasicList from '../ListBasicList';

export default function Page() {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <div>
      <h1 className={styles.title}>Page Publications/index</h1>
      <ListBasicList />
    </div>
  );
}
