import React, { useCallback } from 'react'
import {useNavigate} from 'react-router-dom'
const CreatePost = () => {

  const navigate = useNavigate()
  
  const onClick = useCallback(() => {
    alert('Пост создан')
    navigate('/', {replace:true})
  }, [navigate])

  return (
    <>
      <h2>
        Create Post Page
      </h2>
      <div>
        <input type="text" />
      </div>
      <div>
        <button onClick={onClick}>Create Post</button>
      </div>
    </>
  )
}

export default CreatePost