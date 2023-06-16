import PostList from '../Posts/PostList'


export type Url = {
  title: string
  url: string
}

type Props = {
  className?: string
  type?: Url[]
}

export const Main = (props: Props) => {
  return (
    <PostList tabsList={props.type} />
  )
}
