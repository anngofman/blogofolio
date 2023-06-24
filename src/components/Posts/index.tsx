import styles from './Post.module.scss'
import LikeButton from '../buttons/connect/LikeButton'
import DisLikeButton from '../buttons/connect/DisLikeButton'
import Bookmark from '../buttons/connect/BookmarkButton'
import MenuMoreButton from '../buttons/connect/MenuMoreButton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { dislikePostAction, likePostAction, setFavPostAction } from '../../store/post/actions'
import { useSelector } from 'react-redux'


type Props = {
  id: number
  title: string
  text: string
  image?: string
  likes: number
  dislikes: number
  isPopular: boolean
  isFavorite: boolean
  view?: 'head' | 'main' | 'sideBar'
  className?: string
  onClick?: () => void
}

export const Post = (props: Props) => {
  let date = new Date()
  const dispatch = useDispatch<AppDispatch>()

  const likeBtnOnClick = () => {
    dispatch(likePostAction(props.id))
  }

  const disLikeBtnOnClick = () => {
    dispatch(dislikePostAction(props.id))
  }

const clickFav =()=> {
    dispatch(setFavPostAction(props.id))
}

  const wrapClass = `${styles.post} ${(props.view === 'head') ? styles.head : ((props.view === 'main') ? styles.main : styles.sideBar)}`
  return (
    <div className={`${wrapClass} ${props.className}`}>
      <Link to={`/posts/${props.id}`} className={styles.link}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>{date.toDateString()}</p>
            <div className={styles.title}>
              <h2>{props.title}</h2>
            </div>
            <div className={styles.description}>
              {props.text}
            </div>
          </div>
          <div className={styles.postImg}>
            <img src={props.image} alt={'img'}>
            </img>
          </div>
        </div>
      </Link>
      <div className={styles.connect}>
        <div className={styles.likes}>
          <LikeButton like={props.likes} onClick={likeBtnOnClick} />
          <DisLikeButton dislike={props.dislikes} onClick={disLikeBtnOnClick} />
        </div>
        <div className={styles.options}>
          <Bookmark isFav={props.isFavorite} onClick={clickFav} />
          <MenuMoreButton onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

