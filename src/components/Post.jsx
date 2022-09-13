import { useState } from 'react'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styled from "./Post.module.css";
import  { format, formatDistanceToNow } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {

  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToList) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToList)
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewCommentEmpty = comments.length === 0;

  return (
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styled.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="11 de Maio as 08:13" dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styled.content}>
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if(line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styled.commentForm}>
        <strong>Deixe seu feeback</strong>
        <textarea 
          name="comment" 
          onChange={handleNewCommentChange} 
          placeholder="Deixe um Comentário"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styled.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  );
}
