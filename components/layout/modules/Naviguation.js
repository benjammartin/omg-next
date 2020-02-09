import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import Link from 'next/link';


const Naviguation = () => {
  const NavContext = useContext(AppContext);
  const { menu } = NavContext || {}; 
  const [ data ] = [...menu]
  return (
    <div className="main-naviguation">
      {data.items.map(({item}) => <Link key={item.uid} href="/category/[uid]" as={`/category/${item.uid}`}><h2>{item.uid}</h2></Link>)}
    </div>
  )
}

export default Naviguation