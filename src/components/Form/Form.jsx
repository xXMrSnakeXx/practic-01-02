import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
 const handleSubmit = e =>{
  e.preventDefault()
  if(!query.trim()){
    return alert("Can not be empty")
  }
  onSubmit(query.trim())
  setQuery('')
 }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        onChange={handleChange}
        value={query}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
