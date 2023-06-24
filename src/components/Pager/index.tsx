import React, { useEffect, useState } from 'react'
import { getPages } from './getPages'
import { Link } from 'react-router-dom'

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
    <div className='pager'>
      {
        pages.map(item => (
          item === '..'
            ? (
              <span>{item}</span>
            ) : (
              <Link to={'/posts/' + item}>{item}</Link>
            )
        ))
      }
    </div>
  )
}

export default Pager