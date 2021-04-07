import React from 'react'
import { css } from '@emotion/react'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Donations from './components/donations'

const appCss = css`
  color: white;
`

function App() {
  return (
    <div css={appCss}>Helloo World!
    <Header />
    <Banner />
    <Donations />
    <Footer />
    </div>
    
  )
}
export default App;