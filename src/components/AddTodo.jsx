const AddTodo = ({ addTodo, valueInput, setValueInput}) => {

  function onChangeInput() {
    setValueInput(event.target.value);
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <div>
        <input type="text" className='border-2 border-solid rounded-lg' 
        value={valueInput} onChange={onChangeInput} />

        <button onClick={() => 
        addTodo(valueInput)} className="border-2 border-solid 
        rounded-lg bg-sky-300 cursor-pointer px-2 py-1">
        Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodo
