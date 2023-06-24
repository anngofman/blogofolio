import PostList from '../Posts/PostList'


export type Url = {
  title: string
  url: string
}

type Props = {
  className?: string
  type?: Url[]
  page?:number
}

export const Main = (props: Props) => {
  return (
    <PostList page={props.page as number} tabsList={props.type} />
  )
}
