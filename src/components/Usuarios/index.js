import React, {Component} from 'react';
import axios from 'axios'; //uso de get


class Usuarios extends Component {
  constructor(){
    super();
    this.state = {
      usuarios:[]
    }
  }


  //para inicializar el estado del componente aquí y no en el constructir
  async componentDidMount(){
     console.log("1_hola");
     //es una promesa, es necesario async y await 
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    //console.log(respuesta.data);
    this.setState({
      usuarios: respuesta.data
    })
  }


  ponerFilas = ()=>(
    //map itera los elementos del arreglo
    //por cada ususario va a regresar tr con td
    this.state.usuarios.map((usuario)=>(
      <tr>
        <td key={usuario.id}>
          {usuario.name}
        </td>
        <td>
          {usuario.email}
        </td>
        <td>
          {usuario.website}
        </td>
      </tr>
    ))
  );

  render(){
    console.log(this.state.usuarios, "2_hola")
    return (
      <div className="margin" >
        <table className="table">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
          {this.ponerFilas()}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Usuarios;
