import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const URL = 'https://api.jokes.one/jod';

function App() {
  const [title,setTitle] = useState('');
  const [text,setText] = useState('');

  useEffect (() => {
    axios.get(URL)
      .then((response)=> {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
      }).catch (error => {
        alert(error);
      });
  }, []);

  return (
    <>
    <div /*style={{margin: 50}}*/>
      <h1 class="p-3 mb-2 bg-primary text-white"><span class="header">Joke of the day</span></h1>
      <h3><span class="title">{title}</span></h3>
      <p><span class="punchline">{text}</span></p>
    </div>
    </>
  );
}

export default App;
