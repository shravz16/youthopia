import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux'; // Import Provider
import store from './reducers/store.js'; // Import your Redux store
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js'

import {GoogleOAuthProvider} from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')!).render(
<GoogleOAuthProvider clientId='169283847790-f4cslu2itat2eq8l57nga5g3mo0oap55.apps.googleusercontent.com'>
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>
  </I18nextProvider>
  </GoogleOAuthProvider>
)
