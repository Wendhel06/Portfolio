import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Github.module.css';

const GitHub = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getApi(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Deu ruim mané');
      }
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    getApi('https://api.github.com/users/Wendhel06/repos');
  }, []);

  return (
    <section className={styles.gitHub}>
      <h1>GitHub</h1>
      <div className={styles.holdGithub}>
        <div className={styles.contentGithub}>
          <ul>
            {data.map(({ id, name, html_url, created_at }) => (
              <li key={id}>
                <h3>{name}</h3>
                <Link
                  to={html_url}
                  target="_blank"
                  className={styles.linkGithub}
                >
                  Url: {html_url}
                </Link>
                <p>
                  Data de criação:{' '}
                  {Intl.DateTimeFormat('pt-BR').format(new Date(created_at))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
