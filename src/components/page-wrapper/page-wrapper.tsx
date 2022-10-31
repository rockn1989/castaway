import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import MainLayout from '../main-layout/main-layout'

import './page-wrapper.scss'

const PageWrapper = () => {
  // Лучше сделать компонент PageWrapper с чилдреном
  // чтобы можно было использовать где угодно, а не только так

  // Передавай сюда в пропсах children: React.ReactNode и в самом App.tsx используй <PageWrapper> <Header /> <Layout /> <Footer /> </PageWrapper>
  return (
    <div className="page-wrapper">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  )
}

export default PageWrapper
