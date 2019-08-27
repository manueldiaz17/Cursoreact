import React from 'react';
import Fecha from './../component/Fecha';
class Lista extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            lista: [
                {
                    nombre:'Manuel Diaz',
                    edad: 0,
                    cumple:1,
                    contrasena:'',
                    telefono:'',
                    id:0,
                    estado: 0
                },
                {
                    nombre:'Luis Perez',
                    edad: 0,
                    cumple:1,
                    contrasena:'',
                    telefono:'',
                    id:1,
                    estado: 1
                }
            ],
            obj: {
                nombre:'',
                edad: 0,
                cumple:1,
                telefono:'',
                id:0
            },
        };

        this.eliminar = this.eliminar.bind(this);
        this.modificar = this.modificar.bind(this);
    }

    eliminar(id){
        alert("estas eliminando el usuario: "+id)
    }
    
    modificar(data){
        alert(JSON.stringify(data))
    }

    render(){
        return <div className={
            'container col-lg-10'
        }>
            <br></br>
            <div className={'text-center'}>
                <Fecha/>
            </div>
            <br></br>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Cumplea años</th>
                        <th>Telefono</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.lista.map(item => 
                            <tr className={
                                item.estado?'bg-success':'bg-danger' 
                            } key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.edad}</td>
                                <td>{item.cumple}</td>
                                <td>{item.telefono}</td>
                                <td><button onClick={ (e) => this.modificar(item)} className=
                                    {"btn btn-primary"}>M</button></td>
                                <td><button onClick={(e) => this.eliminar(item.id)} className=
                                    {"btn btn-warning"}>E</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>;
    }

}

export default Lista;
