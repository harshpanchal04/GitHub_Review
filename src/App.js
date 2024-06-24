import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState('public');

  const fetchRepos = async () => {
    if (!username) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError('');
    setRepos([]);

    try {
      let response;
      if (authMethod === 'public') {
        response = await axios.get(`https://api.github.com/users/${username}/repos`);
      } else {
        if (!password) {
          setError('Please enter your GitHub personal access token');
          setLoading(false);
          return;
        }
        response = await axios.get('https://api.github.com/user/repos', {
          auth: {
            username: username,
            password: password // This should be a personal access token
          }
        });
      }
      setRepos(response.data.map(repo => repo.name));
    } catch (err) {
      setError('Failed to fetch repositories. Please check your input and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub Repository Fetcher</h1>
      <div>
        <label>
          <input 
            type="radio" 
            value="public" 
            checked={authMethod === 'public'} 
            onChange={() => setAuthMethod('public')}
          />
          Fetch public repos (username only)
        </label>
        <label>
          <input 
            type="radio" 
            value="private" 
            checked={authMethod === 'private'} 
            onChange={() => setAuthMethod('private')}
          />
          Fetch all repos (username and token)
        </label>
      </div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {authMethod === 'private' && (
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter GitHub personal access token"
        />
      )}
      <button onClick={fetchRepos} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Repositories'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {repos.length > 0 && (
        <div>
          <h2>Repositories for {username}:</h2>
          <ul>
            {repos.map(repo => (
              <li key={repo}>{repo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;