// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, username, comment, time, isLiked, intialClassName} = commentDetails
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const intialLetter = username ? username[0].toUpperCase() : ''
  const likedTextClassName = isLiked ? 'button active' : 'button'

  const postedTime = formatDistanceToNow(time)
  const onClickLike = () => {
    const {toggleIsliked} = props
    toggleIsliked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li>
      <div className="comment-conatainer">
        <div className={intialClassName}>
          <p className="intial">{intialLetter}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{username}</p>
            <p className="time">{postedTime}ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-image" />
          <button
            className={likedTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
