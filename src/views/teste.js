import React from 'react'

class Teste extends React.Component{
    render(){
        return(
            <div>
             <div className="container">
      <div className="row">
        <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
      <div className="bs-docs-section">
      
          <div className="card mb-3">
            <h3 className="card-header">Login</h3>
            <div className="card-body">
            
  
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                  <fieldset>
                      
                      <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email: *</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"/>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Senha: *</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    </fieldset>
                    </div>
                    
                    
                    <button onClick="window.location.href='home.html'" type="button" className="btn btn-success">Entrar</button>
                    <button onClick="window.location.href='usuarios.html'" type="button" className="btn btn-danger">Cadastrar</button>
  
                  
            </div>
          
          </div>
  
          </div>
          </div>
        </div>
  
       
        </div>
      </div>   
            </div>
        
</div>

        )
    }
}

export default Teste