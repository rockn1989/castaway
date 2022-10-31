import React from 'react'
import './App.scss'

import PageWrapper from '../page-wrapper/page-wrapper'

// Компоненты и папки компонентов принято называть с большой буквы
// А ещё лучше придерживаться формата ComponentName/index.tsx

const App = () => {
  return (
    <div className="App">
      <PageWrapper />
    </div>
  )
}

export default App
