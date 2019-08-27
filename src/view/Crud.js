import React from 'react';
class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:'',
            edad:'',
            cumple:'',
            telefono:''
        };
    }
    render() {
        return <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Edad :
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
        Cumpleaños:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Telefono:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Contraseña:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Vuelva a ingreasar la contraseña:
          <input type="text" name="name" />
        </label>
        <br></br>   
        <input type="submit" value="Submit" />
      </form>  
    }
}

export default Crud;   