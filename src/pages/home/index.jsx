import './style.css'
import Trash from '../../assets/lixeira.png'

function Home() {

  const users = [
    {
      id: 'asdas13231as',
      name: 'Lucas',
      email: 'lucas@gmail.com',
      age: 20
    },
    {
      id: 'asdas1323109',
      name: 'João',
      email:'joao@gmail.com',
      age: 25
    }]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type="text" placeholder='Enter your name' />
        <input name='email' type="email" placeholder='Enter your email' />
        <input name='age' type="number" placeholder='Enter your age' />
        <button type="button" className='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
          
          <button>
            <img src={Trash} alt="Trash" />
          </button>
        </div>

      ))}
    </div>      

  )
}

export default Home