import './App.css';
import React from 'react';
import {  useDispatch } from 'react-redux'; // useSelector,
// import { increment, log, decrement } from './actions';
import { changeTitle, changeBody, changeCategory } from '../../actions/index.js';
import { Form, Field } from 'react-final-form'
// import { get } from 'lodash';


function FormComponent() {
  // const counter = useSelector(state => state.counterReducer);
  // const logged  = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    //   <h1>Hello {counter} and {logged? <p>true</p>:<p>false</p>}</h1>
    //   <button onClick={()=>{dispatch(log())}}>LOG</button>
    <Form onSubmit={(formObj) => {
      const otherObj = {
        "Article_short_description": "short description X",
        "Article_source": "source of articleX",
        "Article_URL": "Url of articleX",
        "Location": "Location of articleX",
        "Article_keywords": "Keywords of articleX",
        "Article_weight": 1,
        "Article_citations": "citations of articleX"
        }
      const finalJson = {...formObj,...otherObj}
      console.log(finalJson);
      dispatch(changeTitle(formObj.Article_no));
      dispatch(changeBody(formObj.Article_body));
      dispatch(changeCategory(formObj.Article_category));
      if(formObj.Article_no && formObj.Article_body && formObj.Article_category){
        console.log("ALL FIELDS COMPLETED, SENDING API REQUEST TO CREATE ARTICLE...");
        postData('http://127.0.0.1:8080/articles/', finalJson).then((data) => {
          console.log("CREATED ARTICLE: ",data); // JSON data parsed by `data.json()` call
        });
      }
    }}>
      {({handleSubmit})=>(
        <form onSubmit={handleSubmit}>
          <Field name='Article_no'>
            {({input})=>(
              <input type="text" placeholder='Article Name' {...input}></input>
            )}
          </Field>
          <Field name='Article_body'>
            {({input})=>(
              <textarea type="text" placeholder='Article Body' {...input}></textarea>
            )}
          </Field>
          <Field name='Article_category'>
            {({input})=>(
              <input type="text" placeholder='Article Category' {...input}></input>
            )}
          </Field>
          <button type='submit'>SUBMIT</button>
        </form>
      )}
    </Form>
  );
}

export default FormComponent;
