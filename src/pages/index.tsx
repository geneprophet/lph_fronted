import React from 'react';
import styles from './index.less';
import Table from './Table';
export default function Page() {
  return (
    <div>
      <Table />
      <div className={styles.welcome}>
        Welcome to the Peilin Jia Laboratory for Precision Health and Bioinformatics at the Beijing Institute of Genomics, Chinese Academy of Sciences, China National Center for Bioinformation.
      </div>
    </div>
  );
}
