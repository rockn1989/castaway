import React from 'react';
import './App.scss';

import { PageWrapper } from '../PageWrapper';
import { Header } from '../Header';
import { MainLayout } from '../MainLayout';
import { Footer } from '../Footer';

const App = () => {
  return (
    <div className="App">
      <PageWrapper>
        <Header />
        <MainLayout />
        <Footer />
      </PageWrapper>
    </div>
  );
}

export default App;
