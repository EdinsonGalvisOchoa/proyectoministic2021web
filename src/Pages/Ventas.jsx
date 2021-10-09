import React from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
// lista de objetos iniciales
const data = [
  { idVentas: 1, valortotalventa: 1000, idproducto: 1, cantidadproductos: 1, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1015548375, nombrecliente: "Warren Buffett", nombrevendedor: "Jair Hernández", estado: "En Proceso" },
  { idVentas: 2, valortotalventa: 2000, idproducto: 3, cantidadproductos: 5, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1335483751, nombrecliente: "Peter Lynch", nombrevendedor: "Chris Gardner", estado: "Entregada" },
  { idVentas: 3, valortotalventa: 3000, idproducto: 2, cantidadproductos: 6, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1287487952, nombrecliente: "George Soros", nombrevendedor: "Mary Kay Ash", estado: "Cancelada" },
  { idVentas: 4, valortotalventa: 8000, idproducto: 5, cantidadproductos: 10, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1054812793, nombrecliente: "Carl Icahn", nombrevendedor: "Dave Liniger", estado: "En Proceso" },
  { idVentas: 5, valortotalventa: 5000, idproducto: 4, cantidadproductos: 1, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1024980652, nombrecliente: "Benjamin Graham", nombrevendedor: "Joe Girard", estado: "Entregada" },
  { idVentas: 6, valortotalventa: 7000, idproducto: 6, cantidadproductos: 2, preciounidad: 100, fechaventa: "2000-01-01", documentoidentificacion: 1045869741, nombrecliente: "Ray Dalio", nombrevendedor: "Chris Gardner", estado: "En Proceso" },
];

class Ventas extends React.Component {
  //creamos el Estado data para ir almacenando la lista de  productos
  state = {
    //
    data: data,
    // con esto controlamos cuando se abre y cuando se cierra el modal
    modalActualizar: false,
    modalInsertar: false,

    //creamos el estado del formulario
    form: {
      idVentas: "",
      valortotalventa: "",
      idproducto: "",
      cantidadproductos: "",
      preciounidad: "",
      fechaventa: "",
      documentoidentificacion: "",
      nombrecliente: "",
      nombrevendedor: "",
      estado: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  // esta funcion cambia el estado a true de la funcion del metodo modalinsertar
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };
  // esta funcion cambia el estado a false de la funcion del metodo modalinsertar
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.idVentas === registro.idVentas) {
        arreglo[contador].valortotalventa = dato.valortotalventa;
        arreglo[contador].idproducto = dato.idproducto;
        arreglo[contador].cantidadproductos = dato.cantidadproductos;
        arreglo[contador].preciounidad = dato.preciounidad;
        arreglo[contador].fechaventa = dato.fechaventa;
        arreglo[contador].documentoidentificacion = dato.documentoidentificacion;
        arreglo[contador].nombrecliente = dato.nombrecliente;
        arreglo[contador].nombrevendedor = dato.nombrevendedor;
        arreglo[contador].estado = dato.estado;

      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.idVentas === registro.idVentas) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    // Almacenar en una variable lo que se tenga en nuestro estado form para poder agregar el ID de forma automaticamica
    var valorNuevo = { ...this.state.form };
    // le sumamos 1 a nuestro id actual
    valorNuevo.idVentas = this.state.data.length + 1;
    // Almacenar en una lista todos los elemntos para poder midificarla
    var lista = this.state.data;
    // a la lista le agramos el elemnto nuevo a la lista creacda en esta funcion
    lista.push(valorNuevo);
    // Actualizamos nuestro estado diciendo que data es igual a lista, y colocamos la funcion modalinsentar en false para cerrarlo
    this.setState({ modalInsertar: false, data: lista });
  }
  // funcion para que el usuario cuando este digitando los datos del formulario automaticamente se actulice en el estado
  // cambio de estado en el formulario para que conforme se vaya escribiendo en los input se vaya escribiendo en los estados del form
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
          <br />
          <nav class="navbar navbar-light bg-light justify-content-between">
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <form class="form-inline">
          <input  type="search" placeholder="Search" aria-label="Search"/>
           <button  type="submit">Search</button></form></nav>
          <br />
          <br />
          {/*T mayuscula en Table para trabajar con la etiqueta de reactstrap */}
          <Table dark hover responsive>
            <thead>
              <tr>
                <th>Id Venta</th>
                <th>Valor total venta</th>
                <th>Id Producto</th>
                <th>Cantidad productos</th>
                <th>Precio unidad</th>
                <th>Fecha ventas</th>
                <th>Documento de identificacion</th>
                <th>Nombre del cliente</th>
                <th>Nombre del vendedor</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {/*funcion map para poder ir elemento por elemento, aca desplegamos todos nuestros elemenmtos en la tabla*/}
              {this.state.data.map((dato) => (
                <tr key={dato.idVentas} >
                  <td>{dato.idVentas}</td>
                  <td>{dato.valortotalventa}</td>
                  <td>{dato.idproducto}</td>
                  <td>{dato.cantidadproductos}</td>
                  <td>{dato.preciounidad}</td>
                  <td>{dato.fechaventa}</td>
                  <td>{dato.documentoidentificacion}</td>
                  <td>{dato.nombrecliente}</td>
                  <td>{dato.nombrevendedor}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="warning" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>


        {/*Inicio configuracion Ventana modal con el atributo is open llamo al metodo actualizar*/}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id Venta:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.idVentas} />
            </FormGroup>
            <FormGroup>
              <label> Valor total venta:</label>
              <input class="form-control" name="valortotalventa" type="number" onChange={this.handleChange} value={this.state.form.valortotalventa} />
            </FormGroup>
            <FormGroup>
              <label>Id producto:</label>
              <input className="form-control" name="idproducto" type="number" onChange={this.handleChange} value={this.state.form.idproducto} />
            </FormGroup>
            <FormGroup>
              <label> Cantidad productos:</label>
              <input class="form-control" name="cantidadproductos" type="number" onChange={this.handleChange} value={this.state.form.cantidadproductos} />
            </FormGroup>
            <FormGroup>
              <label> Precio unidad:</label>
              <input class="form-control" name="cantidadproductos" type="number" onChange={this.handleChange} value={this.state.form.preciounidad} />
            </FormGroup>
            <FormGroup>
              <label> Fecha venta:</label>
              <input class="form-control" name="fechaventa" type="date" onChange={this.handleChange} value={this.state.form.fechaventa} />
            </FormGroup>
            <FormGroup>
              <label> Documento de identificacion:</label>
              <input class="form-control" name="documentoidentificacion" type="number" onChange={this.handleChange} value={this.state.form.documentoidentificacion} />
            </FormGroup>
            <FormGroup>
              <label>Nombre del cliente:</label>
              <input class="form-control" name="nombrecliente" type="text" onChange={this.handleChange} value={this.state.form.nombrecliente} />
            </FormGroup>
            <FormGroup>
              <label>Nombre del vendedor:</label>
              <select class="form-control" name="nombrevendedor" type="text" onChange={this.handleChange} value={this.state.form.nombrevendedor}><option>Chris Gardner</option><option>Dave Liniger</option><option>Mary Kay Ash</option><option>Jair Hernández</option><option>Joe Girard</option></select>
            </FormGroup>
            <FormGroup>
              <label>Estado:</label>
              <select class="form-control" name="estado" type="text" onChange={this.handleChange} value={this.state.form.estado}><option>En Proceso</option><option>Entregada</option><option>Cancelada</option></select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Guardar </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}> Cancelar </Button>
          </ModalFooter>
        </Modal>


        {/*Inicio modal insertar */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar valor total venta</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label> Id Venta:</label>
              <input className="form-control"
                // El id va ser de solo lectura para que el usuario no lo edite
                readOnly
                type="text"
                // Por eso el valor del ID va a ser la longitud de nuestro arreglo mas 1 , para que sea nuestro nuemero consecutivo
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label> Valor total venta: </label>
              <input class="form-control" name="valortotalventa" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Id producto: </label>
              <input className="form-control" name="idproducto" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Cantidad productos: </label>
              <input class="form-control" name="cantidadproductos" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Precio unidad: </label>
              <input class="form-control" name="preciounidad" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Fecha de venta: </label>
              <input class="form-control" name="fechaventa" type="date" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Documento de identificacion: </label>
              <input class="form-control" name="documentoidentificacion" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Nombre del cliente:</label>
              <input class="form-control" name="nombrecliente" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label> Nombre del vendedor:</label>
              <select class="form-control" name="nombrevendedor" type="text" onChange={this.handleChange}><option>Chris Gardner</option><option>Dave Liniger</option><option>Mary Kay Ash</option><option>Jair Hernández</option><option>Joe Girard</option></select>
            </FormGroup>
            <FormGroup>
              <label> Estado:</label>
              <select class="form-control" name="estado" type="text" onChange={this.handleChange}><option></option><option>En proceso</option><option>Entregada</option><option>Cancelada</option></select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            {/*llamamos a la funcion insertar para modificar el arreglo*/}
            <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}> Cancelar</Button>
          </ModalFooter>
        </Modal>
        {/*fin configuracion Ventana modal */}
      </>
    );
  }
}
export default Ventas;