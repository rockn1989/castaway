import React from 'react'
import Header from "../header/header";
import Footer from "../footer/footer";
import MainLayout from '../main-layout/main-layout';

import './page-wrapper.scss'

const PageWrapper = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  )
}

export default PageWrapper;