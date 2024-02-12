import ShowTodos from './components/ShowTodos';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';
import CategoriasTodos from './components/CategoriasTodos';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [valueInput, setValueInput] = useState('');
  const [categoria, setCategoria] = useState('TRABAJO');

  useEffect(() => {
    setValueInput('')
  }, [todos])


  function addTodo(todo) {
    setTodos(todos => {
      if (categoria) {
        return [...todos, {
          ['id']: getIdRandom(),
          ['nombre']: todo,
          ['categoria']: categoria,
        }]
      }
    });
  }

  function changeSelect() {
    setCategoria(event.target.value);
  }

  function getIdRandom() {
    return Math.random() * 1000;
  }

  function deleteTodo(id) {
    setTodos([...todos]
      .filter(e => e['id'] !== id))
  }

  return (
    <div className='p-10'>
      <h1 className='text-center text-4xl pb-10'>Todos App</h1>
      <div className="">
        <div className='grid grid-cols-2'>
          <div>
            <AddTodo addTodo={addTodo}
              valueInput={valueInput}
              setValueInput={setValueInput} />

            <CategoriasTodos changeSelect={changeSelect}
              setCategoria={setCategoria} />
          </div>
          <div>
            <h1>Show Todos</h1>
            {
              todos.map((values) => {
                return (
                  <div className='' key={values['id']}>
                    <ShowTodos deleteTodo={deleteTodo}
                      values={Object.values(values)}
                      keys={values} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
