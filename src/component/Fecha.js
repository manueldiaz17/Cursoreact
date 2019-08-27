import React from 'react'

class Fecha extends React.Component{
    constructor(){
    super();
    this.state = {
        fecha: ''
    }
    this.getFecha = this.getFecha.bind(this);
    this.getFecha();
}
getFecha(){
    let este = this;
    setInterval(function(){
        let fecha = new Date();
        este.setState({fecha: fecha.getFullYear()+'-'+(fecha.getMonth() + 1)+'-'+fecha.getDate()+" "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()}); 
    }, 1000)
}
render(){
    
    return <div>
        <h1>{this.state.fecha}</h1>
    </div>
}
}

export default Fecha;
