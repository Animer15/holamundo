import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatoNombre(persona){
  return persona.nombre + '  ' +persona.apellido;
}

function reloj(){
  const hora=(
    <div>
      <h3>-----------------------------------------------------</h3>
      <h1>Hola la hora es las: {
          new Date().toLocaleTimeString()
        }
      </h1>
    </div>
  )
  ReactDOM.render(hora,document.getElementById("root3"))
}
setInterval(reloj,1000);

const usuario = {
  nombre : "Amine",
  apellido : "Chajadine"
}

const name = "Celia";
const saludo = <h1>Hola, {name}!!</h1>;
const saludo1 = <h1>Hola, {usuario.nombre}</h1>;
let saludo2 = <h1>Hola, {formatoNombre(usuario)}</h1>;

ReactDOM.render(
	saludo2,
  document.getElementById('root')
)
const hola = (<h1 className='greating'>Hola mundo !!</h1>);
const hola1 = React.createElement('h1',{className:'greating'},'Hola Mundo!!!!')



ReactDOM.render(
	hola,
  document.getElementById('root2')
)


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Lista de compras para {this.props.name}</h1>
        <ul>
          <li>Pan</li>
          <li>Arroz</li>
          <li>Tomate</li>
        </ul>
      </div>
    );
  }
}
function Despedida(unargument){
  return <h1>Adios , {unargument.name} </h1>
}

class Despedidas extends React.Component{
  render(){
    return <h1>Adios , {this.unargument.name} </h1>
  }
}


const element = <div>Hola</div>
const element1 = <Despedida name="Amine"/>
const element2 = <Despedidas name="Celia"/>

ReactDOM.render(
  element1,
  document.getElementById("root4")
)

  
/*
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', / ... h1 children ... /),
  React.createElement('ul', /* ... ul children ... /)
);
*/

/*
React:
JS:
JSX:Extencin de syntaxis de js  nececita babel para functuanar
*/