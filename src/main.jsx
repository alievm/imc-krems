import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './service/i18n.js'
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <ConfigProvider
              theme={{
                  token: {
                      colorPrimary: '#798591'
                  },
              }}
          >
              <App />
          </ConfigProvider>

      </BrowserRouter>
  </React.StrictMode>,
)
