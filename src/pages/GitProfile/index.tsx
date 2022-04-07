import './styles.css';

import ResultCard from 'components/ResultCard';

const GitProfile = () => {

  const gitUser = {
    avatar_url: '',
    url: 'https://api.github.com/users/marcos-a-ribeiro',
    followers: '1000000',
    location: 'Brasilia-DF',
    name: 'Marcos Antonio Ribeiro',
  };

  return (
    <div className="git-profile-container">
      <div className="search-container ">
        <h1>Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="nome do usuário"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      <ResultCard
        foto={gitUser.avatar_url}
        perfil={gitUser.url}
        seguidores={gitUser.followers}
        localidade={gitUser.location}
        nome={gitUser.name}
      />
    </div>
  );
};

export default GitProfile;
