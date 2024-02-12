const ShowTodos = ({ values, keys, deleteTodo }) => {

  function setColor() {
    if (keys['categoria'] === 'URGENTE') return 'red';
    if (keys['categoria'] === 'TRABAJO') return 'blue';
    if (keys['categoria'] === 'FAMILIA') return 'green';
    if (keys['categoria'] === 'PERSONAL') return 'yellow';
  }

  return (
    <ul>
      <li className="">
        <div className="">{keys['nombre']}
          <div
            style={{ backgroundColor: setColor() }}>
            {keys['categoria']}</div>
        </div>
        <button className='border-solid border-2 bg-red-500
          px-3 rounded-lg py-1 ml-3'
          onClick={() => deleteTodo(keys['id'])}>Delete</button>
      </li>
    </ul>
  )
}

export default ShowTodos
