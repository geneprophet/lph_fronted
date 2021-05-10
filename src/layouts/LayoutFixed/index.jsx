import React from 'react';
import styles from './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import HeaderLab from '../HeaderLab';
import { history } from 'umi';
import {
  FlagOutlined,
  HomeFilled,
  HomeOutlined,
  MenuOutlined,
  MoreOutlined,
  PieChartOutlined,
  ProjectOutlined,
  SoundOutlined,
  TeamOutlined,
  TrademarkOutlined,
} from '@ant-design/icons';
export default (props) => (
  <div className={styles.container}>
    <HeaderLab />
    <div id="components-layout-demo-fixed">
      <Layout>
        <Header style={{ zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={() => props.history.push('/home')}>
              <HomeOutlined />
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={() => props.history.push('/members')}>
              <TeamOutlined />
              Members
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => props.history.push('/publications')}
            >
              <FlagOutlined />
              Publications
            </Menu.Item>
            <Menu.Item key="4" onClick={() => props.history.push('/research')}>
              <TrademarkOutlined />
              Research
            </Menu.Item>
            <Menu.Item key="5" onClick={() => props.history.push('/projects')}>
              <ProjectOutlined />
              Projects
            </Menu.Item>
            <Menu.Item key="6" onClick={() => props.history.push('/news')}>
              <SoundOutlined />
              News & Blog
            </Menu.Item>
            <Menu.Item key="7" onClick={() => props.history.push('/other')}>
              <MenuOutlined />
              Other
            </Menu.Item>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
          {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div>
            © 2021 National Genomics Data Center, China National Center for
            Bioinformation / Beijing Institute of Genomics, Chinese Academy of
            Sciences
          </div>
          <div>
            No.1 Beichen West Road, Chaoyang District, Beijing 100101, China
          </div>
          <div>
            Tel: +86 (10) 8409-7340 | Fax: +86 (10) 8409-7200 | ngdc@big.ac.cn
          </div>
        </Footer>
      </Layout>
    </div>
  </div>
);
