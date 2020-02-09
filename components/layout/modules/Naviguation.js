import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'


const Naviguation = () => {
  const NavContext = useContext(AppContext);
  const { menu } = NavContext || {}; 
  const { data } = menu || {};
  const { body } = data || {};
  return null
}

export default Naviguation