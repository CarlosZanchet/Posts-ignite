import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styled from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styled.comment}>
      <Avatar hasBorder={false} src="https://github.com/carloszanchet.png" />
      <div className={styled.commentBox}>
        <div className={styled.commentContent}>
          <header>
            <div className={styled.authorAndTime}>
              <strong>Carlos Zanchet</strong>
              <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size="20" />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
