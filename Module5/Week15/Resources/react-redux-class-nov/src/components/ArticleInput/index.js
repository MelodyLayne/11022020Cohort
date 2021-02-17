import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addArticle } from '../../reducers/articleReducer'

import './ArticleInput.css'

const ArticleInput = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newArticle = {
      title: title,
      body: body,
      id: nanoid(),
    }

    dispatch(addArticle(newArticle))
  }

  return (
    <div className="inputBox">
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
          name="title"
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name="body"
          placeholder="Add your entry"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default ArticleInput
