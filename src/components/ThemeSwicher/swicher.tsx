
import styles from './swicher.module.css'
import {useEffect, useState} from 'react'

function Swicher() {
  const [theme, setTheme] = useState(0)


  const changeTheme = () => {
    if( theme === 0) {
      setTheme(1)
    }
    else if (theme === 1){
      setTheme(2)
    }
    else if (theme === 2){
      setTheme(0)
    }
  }

  useEffect(()=> {
    const body = document.body
    
    if(theme === 0 ) { 
      body.removeAttribute('class')
      body.classList.add('dark')
    }
    else if (theme === 1) {
      body.removeAttribute('class')
      body.classList.add('light')
    }
    else if (theme === 2) {
      body.removeAttribute('class')
      body.classList.add('violet')
    }

    console.log(body)
  },[theme])


  return (
    <div className={styles.mainCont}>
      <div className={styles.appTitle}>
        <h1 className={styles.title}>calc</h1>
      </div>
      <div className={styles.swicherCont}>
        <div className={styles.text}>
          THEME
        </div>
        <div className={styles.swicherContCont}>
            <span className={styles.numbersCont}>
              <div className={styles.numbers}>1</div>
              <div className={styles.numbers}>2</div>
              <div className={styles.numbers}>3</div>
            </span>
            <div onClick={()=> changeTheme()} className={styles.swicher}>
              <div 
              id={
                theme === 0 ? styles.theme1 :
                theme === 1 ? styles.theme2 : 
                theme === 2 ? styles.theme3 : undefined
              }  
              
              className={styles.ball}>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Swicher