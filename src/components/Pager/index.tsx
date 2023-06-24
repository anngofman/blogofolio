import { useEffect, useState } from 'react'
import { getPages } from './getPages'
import { Link } from 'react-router-dom'
import styles from './pages.module.scss'

type Props = {
  total: number,
  itemPerPage: number,
  currentPage: number
}

const Pager = ({ total, itemPerPage, currentPage }: Props) => {
  const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

  useEffect(() => {
    setPages(getPages(total, itemPerPage, currentPage))
  }, [total, itemPerPage, currentPage])



  return (
    <div className={styles.pager}>
      {
        pages.map((item, index) => (
          item === '..'
            ? (
              <span key={index}>{item}</span>
            ) : (
              <Link key={''+index+item} to={'/posts/' + item}>{item}</Link>
            )
        ))
      }
    </div>
  )
}

export default Pager