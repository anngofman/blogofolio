import { useEffect, useState } from 'react'
import { getPages } from './getPages'
import { Link } from 'react-router-dom'
import styles from './pages.module.scss'

type Props = {
  endpoint:string,
  total: number,
  itemPerPage: number,
  currentPage: number
}

const Pager = ({ endpoint,total, itemPerPage, currentPage }: Props) => {
  const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

  useEffect(() => {
    setPages(getPages(total, itemPerPage, currentPage))
  }, [total, itemPerPage, currentPage])



  return (
    <div className={styles.pager}>
      {
        pages.map((item, i) => (
          item === '..'
            ? (
              <span key={i}>{item}</span>
            ) : (
              <Link key={i} to={`/${endpoint}/${item}`}>{item}</Link>
            )
        ))
      }
    </div>
  )
}

export default Pager