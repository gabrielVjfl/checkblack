import React,{useState} from 'react'

// import {Form, Formik, Field} from 'formik'

 import Axios from 'axios'

const Formulario = () => {

const INITIAL_STATE = {
    titulo: '',
    descricao: '',
    status: '',
    responsavel: '',
    prazo: ''
}
const [state, setState] = useState(INITIAL_STATE)



const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:4700/api/postar",state)
    setState(INITIAL_STATE)
    
}

let handleChange = (e) => {
   setState({...state, [e.target.name]: e.target.value})
}

   return (
           <div>
               
          <form onSubmit={handleSubmit}onChange={handleChange} >
<label id="ltitulo">Titulo : </label><input required className="form-control" type="text" name="titulo" id="titulo" placeholder="Digite o titulo da tarefa" autoFocus="on"></input>
<br></br>
<label id="ldescricao">Descrição : </label><input required className="form-control" type="text" name="descricao" id="descricao" placeholder="Digite a descrição da tarefa"></input>
<br></br>
<label id="lstatus">Status : </label><select type="text" required className="form-control" id="status" name="status">
<option value="">Selecione o Status da tarefa</option>
<option value="em andamento">Em andamento</option>
<option value="Concluido">Concluido</option>
<option value="Atrasado">Atrasado</option>
<option value="Pre Inicio">Pré inicio</option>
</select>
<br></br>
<label id="lresponsavel">Responsável : </label><input className="form-control" type="text" name="responsavel" id="responsavel" placeholder="Digite o nome do responsavel"></input>
<br></br>

<label id="lprazo">Prazo : </label><input className="form-control" type="date" name="prazo" id="prazo"></input>
<br></br>
<button className="btn btn-success" id="btn" type="submit">ADICIONAR</button>
          </form>
     
       </div>
       
   )
}
export default Formulario