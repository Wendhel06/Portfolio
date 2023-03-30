import React from 'react';
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
      setData(json);
    }
    getApi('https://api.github.com/users/Wendhel06/repos');
  }, []);

  return (
    <section className={styles.gitHub}>
      <div className={styles.holdGithub}>
        <div className={styles.contentGithub}>
          <ul>
            {data.map((dados) => (
              <li key={dados.id}>
                <h3>{dados.name}</h3>
                <p>Url: {dados.url}</p>
                <p>
                  Data de criação:{' '}
                  {Intl.DateTimeFormat('pt-BR').format(
                    new Date(dados.created_at),
                  )}
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
