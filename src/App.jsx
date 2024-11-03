import React, { useState } from 'react'
import Counter from './components/Counter'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.main}>
      <h1>Basic Counter</h1>
      <Counter />
    </main>
  )
}

export default App
