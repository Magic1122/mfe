import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Mount Function to stat up the app 
const mount = (el) => {
    ReactDOM.render(
        <App />, 
        el
    )
}


// If we are in dev and in isolation
// call mount immediately 
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}


// We are running throgh container 
// and we should export the mount function
export { mount }
