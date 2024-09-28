import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Health } from './Component/Health';
import './App.css';

function App() {

  const [health, setHealth] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHealth, setFilteredHealth] = useState([]);

  // const apiKey = 'cd656c5d185147829a87bf2ddab7a7bd';
  const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    // Making a GET request when the component mounts
    axios.get(`https://newsapi.org/v2/everything?q=mental-health&from=2024-09-08&to=2024-08-08&sortBy=popularity&apiKey=${apiKey}`)
      .then(response => {
        setHealth(response.data.articles);
        setFilteredHealth(response.data.articles);
        console.log(response.data.articles)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Update filteredData when searchQuery changes
    const filtered = health.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHealth(filtered);
  }, [searchQuery, health]);


  return (
    <section className='my-4'>
          <Container>
            <Row>
            <h1>Health App</h1>
            <input
              type="text"
              className='mb-5 mt-4'
              placeholder="Search by title"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {filteredHealth.map(item => (
                <Health
                  title = {item.title}
                  description = {item.description}
                  image = {item.urlToImage}
                  url = {item.url}
                  date = {item.publishedAt}
                  authorName = {item.author}
                />
            ))}
              </Row>
            </Container>
    </section>
  );
}

export default App;
