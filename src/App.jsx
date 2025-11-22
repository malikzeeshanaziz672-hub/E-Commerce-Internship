import React, { Suspense } from 'react'
import "./App.css"
import Router from './libs/Router'
const App = () => {
  return (
    <Suspense fallback={<div className='font-medium'>...Loading</div>}>
    <Router/>
    </Suspense>
  )
}

export default App
