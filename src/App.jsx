import { useState } from 'react'
import styles from './App.module.css';
import Start from './components/Start/Start';
import Running from './components/Running/Running';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  
  const toggleGame = () => {
    setIsRunning(prev => !prev);
  }

  return (
    <>
      <div className={styles.container}>
        
        {
          // isRunning ? <Running/>: <Start toggle={toggleGame}/>
        }

        <Running/>  

      </div>
    </>
  )
}

export default App

