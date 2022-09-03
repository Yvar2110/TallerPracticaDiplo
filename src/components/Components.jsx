import React from 'react'
 
const Lista = () => {
    const estadoInicial=['Elemento 1','Elemento 2','Elemento 3','Elemento 4']
    const estadoInicialObj=[
{id:1,texto:'Elemento1'},
{id:2,texto:'Elemento2'},
{id:3,texto:'Elemento3'},
{id:4,texto:'Elemento4'}]
    const [lista,setLista]=React.useState(estadoInicial)
    const [listaObj,setListaObj]=React.useState(estadoInicialObj)
    const agregar=()=>{
        setListaObj(
            [
                ...listaObj,
                {id:5,texto:'Elemento5'}
            ]
        )
    }
  return (
    <div>
        <hr />
        <h2>Lista</h2>
        <ul>
            {
                lista.map((item,index)=>(<li key={index}>{item}</li>))
            }
        </ul>
        <button onClick={()=>agregar()} className="m-2 btn btn-outline-secondary">Agregar</button>
        <ul>
            {
                listaObj.map((elemento)=>(
                    <li key={elemento.id} type="1">{elemento.texto}</li>
                ))
            }
        </ul>
    </div>
  )
}
 
export default Lista