import React from 'react';
import styles from './index.less';
import FormRegister from '../../components/FormRegister';
export default function Page(props: any) {
  return (
    <div>
      <h1 className={styles.title}>Page Members/index</h1>
      <FormRegister />
    </div>
  );
}
