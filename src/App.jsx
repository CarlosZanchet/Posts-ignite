import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carloszanchet.png',
      name: 'Carlos Zanchet',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      { type: 'paragraph', content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-09-13 08:10:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
      { type: 'paragraph', content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-09-13 07:10:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )  
          })}
        </main>
      </div>
    </>
  );
}

export default App;
