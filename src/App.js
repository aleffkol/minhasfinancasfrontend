import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login'
import CadastroUsuario from './views/cadastroUsuario'
import './custom.css'
class App extends React.Component {


  render(){
    return(
      <div>
         <CadastroUsuario></CadastroUsuario>
      </div>
    )
  }
}

export default App;
