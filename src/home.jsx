import React, { useState, useEffect } from 'react';

const HomePage = () =>{
    const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch jokes');
      }
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };
    return (
    <div>
      <h2>Jokes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{" "}</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{" "}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage