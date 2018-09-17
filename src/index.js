import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 10px;
    font-family: sans-serif;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
