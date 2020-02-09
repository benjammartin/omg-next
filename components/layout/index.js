import React, {Fragment} from 'react'
import './styles.scss'
import Naviguation from './modules/Naviguation'

const Layout = ({children}) => {
  return (
    <Fragment>
      <Naviguation/>
      <div className="omg-layout">{children}</div>
    </Fragment>    
  )
}

export default Layout