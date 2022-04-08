import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import GitUser from 'types/gituser';
import axios from 'axios';

type FormData = {
  userName: string;
};

const GitProfile = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.userName}`)
      .then((response) => {
        setGitUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitUser(undefined);
      });
  };

  const [gitUser, setGitUser] = useState<GitUser>();

  return (
    <div className="git-profile-container">
      <div className="search-container ">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="userName"
              value={formData.userName}
              className="search-input"
              placeholder="nome do usuário"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {gitUser && (
        <ResultCard
          foto={gitUser.avatar_url}
          perfil={gitUser.url}
          seguidores={gitUser.followers}
          localidade={gitUser.location}
          nome={gitUser.name}
        />
      )}
    </div>
  );
};

export default GitProfile;
