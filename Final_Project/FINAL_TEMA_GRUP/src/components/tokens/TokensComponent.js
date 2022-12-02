import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { changeTokens } from '../../actions/index.js'

function Tokens() {
  const [tokens, setTokens] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://127.0.0.1:8080/tokens')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTokens(data);
        dispatch(changeTokens(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  
  return (
    <div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Token Body</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => {
            return (
              <tr key={token._id}>
                <th>{token._id}</th>
                <th>{token.Token_body}</th>
                <th>{token.Articles.map((article, i) => {
                  if (i === token.Articles.length - 1) {
                    return article;
                  }
                  return article + ", ";
                })}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Tokens