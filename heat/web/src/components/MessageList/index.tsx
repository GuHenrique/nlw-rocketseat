import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList(){
  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logo} src={logoImg} alt="DoWhile 2021  " />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ratione officia. Eaque harum perspiciatis aliquid!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/GuHenrique.png" alt="Gustavo Henrique" />
            </div>
            <span>Gustavo Henrique</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ratione officia. Eaque harum perspiciatis aliquid!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/GuHenrique.png" alt="Gustavo Henrique" />
            </div>
            <span>Gustavo Henrique</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ratione officia. Eaque harum perspiciatis aliquid!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/GuHenrique.png" alt="Gustavo Henrique" />
            </div>
            <span>Gustavo Henrique</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ratione officia. Eaque harum perspiciatis aliquid!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/GuHenrique.png" alt="Gustavo Henrique" />
            </div>
            <span>Gustavo Henrique</span>
          </div>
        </li>
      </ul>
    </div>
    )
}