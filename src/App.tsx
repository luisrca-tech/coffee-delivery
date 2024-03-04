import './App.styles'

import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './themes/defaut'
import { GlobalStyle } from './themes/global'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { CartContextProvider } from './contexts/CartProvider'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
      <Header />
      <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App