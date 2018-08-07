import React from 'react'
import { Col, Layout, Row, Menu, Icon } from 'antd'
import Headroom from '../../utils/Headroom'

import './styles.css'

const LogoUrl = require('../../../assets/images/logo.png')  

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function Header(props) {
  const { onIconMenuClick } = props
  return (
    // <Headroom
    //   render={() => (
        
    //   )}
    // />
    <Layout.Header className="header">
      <Icon onClick={onIconMenuClick} className="menu-icon" type="bars" />
      <Row>
        <Col className="header__logo" xs={24} sm={24} md={6}>
          <a id="logo" href="/home">
            <img src={LogoUrl} alt="logo" />
          </a>
        </Col>
        <Col xs={0} sm={0} md={18}>
          <Menu
            className="menu"
            onClick={() => {}}
            selectedKeys="mail"
            mode="horizontal"
          >
            <Menu.Item className="menu__item" key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item className="menu__item" key="app">
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <Menu.Item className="menu__item" key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
