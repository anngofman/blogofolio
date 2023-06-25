import React from 'react'
import Title from '../../components/Title'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import SearchPost from '../../components/SearchPost'
import Wrapper from '../../components/Wrapper'
import Pager from '../../components/Pager'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
  const {page} = useParams()
  const total = useSelector((state:AppState)=>state.search.count)
  const currentPage = page ? +page : 1
  const searchValue = useSelector((state: AppState) => state.search.search)
  return (
    <Wrapper>
      <Title text={`Search results "${searchValue}"`} />
      <SearchPost />
      <Pager endpoint='search' total={total} currentPage={currentPage} itemPerPage={6}/>
    </Wrapper>
  )
}

export default SearchPage