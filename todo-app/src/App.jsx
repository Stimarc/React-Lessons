import React from 'react';
import ToggleMenu from './components/ToggleMenu';
import { useFetchPost } from "./hooks/useFetchPost";
import useFormValidation from "./hooks/useFormValidation";
import PopUp from './components/PopUp';


const App = () => {
  const post = useFetchPost(1);
  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    { name: '', email: '' },
    validateForm
  );

  function validateForm(values) {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = 'Ім\'я обов\'язкове';
    }

    if (!values.email.trim()) {
      errors.email = 'Електронна пошта обов\'язкова';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Неправильний формат електронної пошти';
    }

    return errors;
  }

  return (
    <div className="App">
      <ToggleMenu />

      <div className="post">
        <h3 className="post__title">{post.title}</h3>
        <p className="post__body">{post.body}</p>
      </div>

      <form className="myForm" onSubmit={handleSubmit}>
        <h3>User form</h3>

        <div className="form-block">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <button type="submit">Send</button>
      </form>

      <PopUp title="my popup" text="popup text" />
      <PopUp title="my popup2" text="popup text 2" />
      <PopUp title="my popup3" text="popup text 3">
        <button>ok</button>
        <button>cancel</button>
      </PopUp>

      <PopUp 
      title="my popup" 
      text="popup text" 
      sx={{boxShadow: '5px 5px 10px rgba(0,0,0,.3'}}
      />


    </div>
  );
};

export default App;