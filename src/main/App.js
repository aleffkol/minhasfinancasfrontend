import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Rotas from './rotas'
import Teste from '../views/teste'
import '../custom.css'
import '../components/navbar'
import Navbar from '../components/navbar';
class App extends React.Component {


  render(){
    return(
      <div>
        <Navbar/>
         <Rotas></Rotas>
      </div>
    )
  }
}

export default App;
