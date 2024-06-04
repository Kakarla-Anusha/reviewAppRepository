import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {username: '', comment: '', commentList: []}

  deleteComment = commentId => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsliked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentList = () => {
    const {commentList} = this.state
    return commentList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        toggleIsliked={this.toggleIsliked}
        commentDetails={eachComment}
        deleteComment={this.deleteComment}
      />
    ))
  }

  nameInputChange = event => {
    this.setState({username: event.target.value})
  }

  commentInputChange = event => {
    this.setState({username: event.target.value})
  }

  submitInfo = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const intialBackgroundClassName = `intial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      username,
      comment,
      isLiked: false,
      time: new Date(),
      intialClassName: intialBackgroundClassName,
    }
    this.setState(prevState => ({commentList: [...prevState, newComment]}))
  }

  render() {
    const {username, comment, commentList} = this.state
    return (
      <div className="app-bg-container">
        <div className="comments-container">
          <h1>Comments</h1>
          <div className="comments-inputs">
            <form className="form-container" onClick="submitInfo">
              <p>say about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Name"
                onChange={this.nameInputChange}
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                onChange={this.commentInputChange}
              />
              <button type="submit">Add Comment</button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-img"
            />
          </div>

          <hr />
          <p>
            <span>{commentList.length}</span> Comments
          </p>
          <ul className="commnets-list">{this.renderCommentList()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
