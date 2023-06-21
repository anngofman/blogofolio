import NavigateBlock from '../../components/nav'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import FormAddPost from '../../components/forms/AddPost'

const CreatePost = () => {
  return (
    <Wrapper>
      <NavigateBlock title='Add post' back='Home' />
      <Title text='Add post' />
      <FormAddPost />
    </Wrapper>
  )
}

export default CreatePost