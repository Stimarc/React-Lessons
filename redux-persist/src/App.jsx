import './App.css';
import { useForm } from 'react-hook-form';
import { MyInput } from './components/MyInput';

const App = () => {

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    reset,
    formState: { errors } 
  } = useForm({
      values: {
        name: '',
        age: 18,
        phone: 380,
        children: '',
      }
 

    });

  const submit = data => {
    console.log('send valid form');
    console.log(data);
  }

  const formError = data => {
    console.log('invalid form');
    console.log(data);
  }

  return (
    <div className="App">
      <h1>React hook forms</h1>

      <form onSubmit={handleSubmit(submit, formError)}>
      <MyInput label="my input" name="myLabel"  register={register} regOpts={{ required: true, maxLength: 5 }}/>

        <label>Name:
          <input type="text" {...register('name', { required: 'Name is required !!!' })} />
          {errors.name ? errors.name.message : false}
          <br />
        </label>
        <label>Age:
          <input type="number" aria-invalid={errors.age ? true : false}
            {...register('age', { required: true,maxLength: 2 })}
          />
          <br />
        </label>
        <label>Phone:
          <input type="number"
            {...register('phone', 
            { 
              required: true, 
              minLength: {value: 12, message: 'phone length min lenght 12 digit'},
              maxLength: {value: 12, message: 'phone length max lenght 12 digit'},
            }
          )}
          />
          <br />
        </label>
        <label>Children quantity:
          <input type="text"
            {...register('children', { required: true, validate: {
              isNumber: value => !Number.isNaN(+value) || 'Field must be a number !!!',
              isPositive: value => value > 0 || 'Qty must be a possitive'
            } })}
          />
          <br />
        </label>
        <button>Send form</button>
        <button type='button' onClick={() => reset()}>Clear form</button>
        <button type="button" onClick={() => clearErrors()}>Clear errors</button>
        <hr />
        <button type='button' onClick={() => setValue('name', 'Petro')}>set name "Petro"</button>
      </form>

       <div className="forms-data">

        <p>name:{watch('name')}</p>
        <p>age:{watch('age')}</p>
       </div>

    </div>
  );
}

export default App;