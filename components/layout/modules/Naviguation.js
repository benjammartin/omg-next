import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'


const Naviguation = () => {
  const NavContext = useContext(AppContext);
  console.log(NavContext)
  return null
}

export default Naviguation