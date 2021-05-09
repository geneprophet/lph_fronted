import React from "react";
import styles from "./index.less";
import img from '../../../public/logo2.png'
import {Col, Divider, Row} from "antd";
export default () => (
  <div>
    <div className={styles.header}>
      <div>
        <img src={img} className={styles.logo}/>
      </div>
      <Row className={styles.text}>
        <Col span={18} push={3}>
          <div>Precision Health and Bioinformatics (Jia Lab)</div>
        </Col>
      </Row>
    </div>

  </div>
);
