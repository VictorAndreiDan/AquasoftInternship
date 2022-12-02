import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import React from 'react';
import axios from 'axios';
import './App.css'
import FormComponent from '../form/FormComponent.jsx';
import { useDispatch } from 'react-redux';
import { changeArticles } from '../../actions/index.js';

function Articles() {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

   useEffect(() => {
    axios.get('http://127.0.0.1:8080/articles/').then(res => {

      setArticles(res.data);
      dispatch(changeArticles(res.data));
    });
  }, []);

  return (
    <div className='App'>
      <FormComponent></FormComponent>
      <Table variant='dark'>
        <thead>
          <tr>
            <th>Article_no</th>
            <th>Article_body</th>
            <th>Article_category</th>
            <th>Article_tokens</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr key={article._id}>
                <th>{article.Article_no}</th>
                <th>{article.Article_body}</th>
                <th>{article.Article_category}</th>
                <th>{article.Article_tokens.join("\n")}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Articles