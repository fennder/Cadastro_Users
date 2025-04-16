import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/lixeira.png'
import Edit from '../../assets/editar.png'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  //Função para pegar dados
  async function getUsers(){
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }


  //Função para cadastrar usuário
  async function createUsers(){

    await api.post('/users', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: Number(inputAge.current.value)
    })
    getUsers()
  }
  // //Função para editar usuário
  // async function updateUsers(id){
  //   await api.put(`/users/${id}`, {
  //     name: inputName.current.value,
  //     email: inputEmail.current.value,
  //     age: Number(inputAge.current.value)
  //   })
  //   getUsers()
  // }

  async function deleteUsers(id){
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type="text" placeholder='Enter your name' ref={inputName} />
        <input name='email' type="email" placeholder='Enter your email' ref={inputEmail}/>
        <input name='age' type="number" placeholder='Enter your age' ref={inputAge}/>
        <button type="button" onClick={createUsers()}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
          </div>
          
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Trash" />
          </button>
          {/* <button onClick={() => updateUsers(user.id)}>
            <img src={Edit} alt="Edit" />
          </button> */}
        </div>

      ))}
    </div>      

  )
}

export default Home