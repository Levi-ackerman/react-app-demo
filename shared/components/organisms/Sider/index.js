import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import './styles.css'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function Sider(props) {
  const { routes, history, location: { pathname } } = props

  const onMenuChange = e => {
    history.push(e.key)
  }

  return (
    <Menu
      onClick={onMenuChange}
      selectedKeys={[pathname]}
      mode="horizontal"
      id="sider"
    >
      {routes.map(item => <Menu.Item key={item.path}>{item.label}</Menu.Item>)}
    </Menu>
  )
}

export default withRouter(Sider)
