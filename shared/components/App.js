import 'normalize.css/normalize.css'

import React from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import { Col, Layout, Row, Drawer } from 'antd'
// import { LoadingBar } from 'react-redux-loading-bar'
import LoadingBar from './molecules/TopLoaderBar'
import config from '../../config'
import './globalStyles'

import routes, { menuRoutes } from './routes'
import Header from './organisms/Header'
import Sider from './organisms/Sider'
import MediaPlayer from './molecules/Player'

class App extends React.PureComponent {
  state = {
    showDrawer: false,
  }

  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer })
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <html lang="en" />
            <meta charSet="utf-8" />
              <meta
                name="application-name"
                content={config('htmlPage.defaultTitle')}
              />
                <meta name="description" content={config('htmlPage.description')} />
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <meta name="msapplication-TileColor" content="#2b2b2b" />
                        <meta
                          name="msapplication-TileImage"
                          content="/favicons/mstile-144x144.png"
                        />
                          <meta name="theme-color" content="#2b2b2b" />
                          <title>{config('htmlPage.defaultTitle')}</title>
          {/*
            A great reference for favicons:
            https://github.com/audreyr/favicon-cheat-sheet
            It's a pain to manage/generate them. I run both these in order,
            and combine their results:
            http://realfavicongenerator.net/
            http://www.favicomatic.com/
          */}
            <link
              rel="apple-touch-icon-precomposed"
              sizes="152x152"
              href="/favicons/apple-touch-icon-152x152.png"
            />
              <link
                rel="apple-touch-icon-precomposed"
                sizes="144x144"
                href="/favicons/apple-touch-icon-144x144.png"
              />
                <link
                  rel="apple-touch-icon-precomposed"
                  sizes="120x120"
                  href="/favicons/apple-touch-icon-120x120.png"
                />
                  <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/favicons/apple-touch-icon-114x114.png"
                  />
                    <link
                      rel="apple-touch-icon-precomposed"
                      sizes="76x76"
                      href="/favicons/apple-touch-icon-76x76.png"
                    />
                    <link
                      rel="apple-touch-icon-precomposed"
                      sizes="72x72"
                      href="/favicons/apple-touch-icon-72x72.png"
                    />
                    <link
                      rel="apple-touch-icon-precomposed"
                      sizes="57x57"
                      href="/favicons/apple-touch-icon-57x57.png"
                    />
                    <link
                      rel="apple-touch-icon-precomposed"
                      sizes="60x60"
                      href="/favicons/apple-touch-icon-60x60.png"
                    />
                    <link
                      rel="apple-touch-icon"
                      sizes="180x180"
                      href="/favicons/apple-touch-icon-180x180.png"
                    />
                    <link
                      rel="mask-icon"
                      href="/favicons/safari-pinned-tab.svg"
                      color="#00a9d9"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      href="/favicons/favicon-196x196.png"
                      sizes="196x196"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      href="/favicons/favicon-128.png"
                      sizes="128x128"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      href="/favicons/favicon-96x96.png"
                      sizes="96x96"
                    />
                    <link
                      rel="icon"
                      type="image/png"
                      href="/favicons/favicon-32x32.png"
                      sizes="32x32"
                    />
                    <link rel="icon" sizes="16x16 32x32" href="/favicon.png" />
                      <meta name="msapplication-TileColor" content="#2b2b2b" />
                      <meta
                        name="msapplication-TileImage"
                        content="/favicons/mstile-144x144.png"
                      />
                      <meta
                        name="msapplication-square70x70logo"
                        content="/favicons/mstile-70x70.png"
                      />
                      <meta
                        name="msapplication-square150x150logo"
                        content="/favicons/mstile-150x150.png"
                      />
                      <meta
                        name="msapplication-wide310x150logo"
                        content="/favicons/mstile-310x150.png"
                      />
                      <meta
                      name="msapplication-square310x310logo"
                      content="/favicons/mstile-310x310.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
          {/*
            NOTE: This is simply for quick and easy styling on the demo. Remove
            this and the related items from the Content Security Policy in the
            global config if you have no intention of using milligram.
          */}
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i"
            />
        </Helmet>
          <LoadingBar loading={false} />
          <Header onIconMenuClick={this.toggleDrawer} />
          <Layout.Content className="container">
            <Row>
              <Col className="sidebar" xs={0} sm={0} md={6}>
                <Sider routes={menuRoutes} />
              </Col>
              <Col className="content" xs={24} sm={24} md={18}>
                {renderRoutes(routes)}
              </Col>
            </Row>
          </Layout.Content>
          <Drawer
            // title="Basic Drawer"
            placement="left"
            closable
            onClose={() => this.setState({ showDrawer: false })}
            visible={this.state.showDrawer}
          >
            <Sider routes={menuRoutes} />
          </Drawer>
          <MediaPlayer />
      </Layout>
    )
  }
}

export default App
