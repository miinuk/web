import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// componentes do react são tags html onde a primeira letra é maiuscula 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
