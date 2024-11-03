import React, { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleCount = (action) => {
    switch (action) {
      case 'decrease':
        setCount(prevCount => prevCount - 1)
        break
      case 'increase':
        setCount(prevCount => prevCount + 1)
        break
      case 'reset':
        setCount(0)
        break
      default:
        break
    }
  }

  const getCountColor = () => {
    if (count < 0) return styles.red
    if (count > 0) return styles.green
    return styles.black
  }

  return (
    <div className={styles.container}>
      <span id="value" className={`${styles.value} ${getCountColor()}`}>{count}</span>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={() => handleCount('decrease')}>decrease</button>
        <button className={styles.btn} onClick={() => handleCount('reset')}>reset</button>
        <button className={styles.btn} onClick={() => handleCount('increase')}>increase</button>
      </div>
    </div>
  )
}

export default Counter
