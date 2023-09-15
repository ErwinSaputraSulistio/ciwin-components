import styles from 'styles/components/atoms/Button.module.scss'

const Button = ({ click, mode, name }) => {
  return(
    <button className={`${styles.button} ${ 
      mode === 'dark' ? styles.buttonDark
      :
      mode === 'light' ? styles.buttonLight
      :
      null
    }`}>
      { name }
    </button>
  )
}

export default Button