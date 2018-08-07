import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
  }

  body {
    /*
      https://meowni.ca/font-style-matcher/

      Styles created using the above tool to try and ensure the FOUT
      (flash of unstyled text) doesn't look drastically different. This
      will try to ensure that when "Lato" is downloaded, it doesn't look
      too different to "sans-serif" and, more importantly, doesn't affect
      the layout of the page too much.
    */
    font-family: 'Karla', Tahoma, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0px;
    word-spacing: 0px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, ul, ol, pre, table, blockquote {
    margin-top: 0rem;
    margin-bottom: 1.75rem;
  }

  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  ul {
    list-style-type: none;

    li {
      display: inline;
      margin: 0;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  #app, .ant-layout {
    min-height: 100vh;
  }

  .text-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .container {
    background-color: white;
    margin-top: 64px;
  }

  .content {
    border: none;
    border-left: 1px solid #ebedf0;
    margin-left: -1px;
  }
`
