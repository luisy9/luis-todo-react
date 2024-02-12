
const CategoriasTodos = ({ changeSelect, setCategoria }) => {

    return (
        <div>
            <select defaultValue='TRABAJO' id="selectCategorias"
                onChange={() => changeSelect()}>
                <option value="TRABAJO">TRABAJO</option>
                <option value="PERSONAL">PERSONAL</option>
                <option value="URGENTE">URGENTE</option>
                <option value="FAMILIA">FAMILIA</option>
            </select>
        </div>
    )
}

export default CategoriasTodos
