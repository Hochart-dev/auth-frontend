import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function FormLogin() {
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const newFields = { ...fields };
    newFields[name] = value;
    setFields(newFields);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('http://localhost:5050/auth/login', fields).then(({ data }) => {
      dispatch({ type: 'USER_LOGIN', user: data.user });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your Email here"
        value={fields.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Your password here"
        value={fields.password}
        onChange={handleChange}
      />
      <input type="submit" value="Let me in!" />
    </form>
  );
}

export default FormLogin;
