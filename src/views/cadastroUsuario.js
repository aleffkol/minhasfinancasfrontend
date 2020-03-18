import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component{
    state = {
        nome:'',
        senha:'',
        senhaRepeticao:'',
        email:''
        
    }

    cadastrar = () =>{
        console.log(this.state)
    }


    render(){
        return(
            <div className="container">
                <Card title="Cadastrar Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                className="form-control"
                                id="inputNome" 
                                name="nome" 
                                placeholder="Insira seu nome"
                                onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>
                                
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" 
                                className="form-control"
                                id="inputSenha" 
                                name="senha" 
                                placeholder="Insira sua senha"
                                onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                                
                                <FormGroup label="Repita sua senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" 
                                className="form-control"
                                id="inputRepitaSenha" 
                                name="senhaRepeticao" 
                                placeholder="Repita sua senha"
                                onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                                
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text" 
                                className="form-control"
                                id="inputEmail" 
                                name="email" 
                                placeholder="Insira seu Email"
                                onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>

                                <button type ="button" className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                                <button type ="button" className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>    
                    </div>
                </Card>
            </div>
        )
    }
}

export default CadastroUsuario