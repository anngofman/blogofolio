import styles from './footer.module.scss'
type Props = {
  className?: string
}
export const Footer = (props: Props) => {
  return (
    <div className={`${styles.footer} ${styles[`${props.className}`]}`}>
      <div className={styles.content}>
        <div className={styles.dateAndName}>
          <p>©2023 Blogfolio</p>
        </div>
        <div className={styles.copyright}>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
