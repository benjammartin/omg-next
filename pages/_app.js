import React, { createContext } from 'react'
import Layout from "../components/layout";
import '../styles/reset.scss'
import { getDocumentByUID } from "../api/prismic";
import AppContext from '../contexts/AppContext'


const MyApp = ({ Component, pageProps, props }) => {
  const { menu } = props || {}
  return (
    <AppContext.Provider value={{menu}}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </AppContext.Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const res = await getDocumentByUID({ type:'layout', uid:'main-menu'})
  const { data : {body, footer, logo} } = res;
  return { props: {
    menu: body, 
    footer:footer 
  } };
}


export default MyApp;