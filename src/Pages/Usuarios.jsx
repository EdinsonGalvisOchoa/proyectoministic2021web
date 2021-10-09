import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
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
    { idUsuario: 1, nombre: "Edinson", rol: "Administrador", estado: "Pendiente" },
    { idUsuario: 2, nombre: "Carlos", rol: "Vendedor", estado: "Autorizado" },
    { idUsuario: 3, nombre: "Emilio", rol: "Administrador", estado: "Autorizado" },
    { idUsuario: 4, nombre: "Adolfo", rol: "Administrador", estado: "Pendiente" },
    { idUsuario: 5, nombre: "Andres", rol: "Vendedor", estado: "Autorizado" },
    { idUsuario: 6, nombre: "Miguel", rol: "Vendedor", estado: "No autorizado" },
];

class Usuarios extends React.Component {
    //Estado para ir almacenando la lista de  productos
    state = {
        //
        data: data,
        // con esto controlamos cuando se abre y cuando se cierra el modal
        modalActualizar: false,
        modalInsertar: false,
        form: {
            idUsuario: "",
            nombre: "",
            rol: "",
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
            if (dato.idUsuario === registro.idUsuario) {
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].rol = dato.rol;
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
                if (dato.idUsuario === registro.idUsuario) {
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
        valorNuevo.idUsuario = this.state.data.length + 1;
        // Almacenar en una lista todos los elemntos para poder midificarla
        var lista = this.state.data;
        // a la lista le agramos el elemnto nuevo a la lista creacda en esta funcion
        lista.push(valorNuevo);
        // Actualizamos nuestro estado diciendo que data es igual a lista, y colocamos la funcion modalinsentar en false para cerrarlo
        this.setState({ modalInsertar: false, data: lista });
    }
    // funcion para que el usuario cuando este digitando los datos del formulario automaticamente se actulice en el estado
    // cambio de estado
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
                        <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                        <form class="form-inline">
                            <input type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit">Search</button></form></nav>
                    <br />
                    <br />
                    {/*T mayuscula en Table para trabajar con la etiqueta de reactstrap */}
                    <Table dark hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*funcion map para poder ir elemento por elemento */}
                            {this.state.data.map((dato) => (
                                <tr key={dato.idUsuario}>
                                    <td>{dato.idUsuario}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.rol}</td>
                                    <td>{dato.estado}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
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
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.idUsuario} />
                        </FormGroup>
                        <FormGroup>
                            <label> Nombre:</label>
                            <input class="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
                        </FormGroup>
                        <FormGroup>
                            <label>Rol:</label>
                            <select class="form-control" name="rol" type="text" onChange={this.handleChange} value={this.state.form.rol}><option>Administrador</option><option>Vendedor</option><option>Usuario</option></select>
                        </FormGroup>
                        <FormGroup>
                            <label>Estado:</label>
                            <select class="form-control" name="estado" type="text" onChange={this.handleChange} value={this.state.form.estado}><option>Pendiente</option><option>Autorizado</option><option>No autorizado</option></select>
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
                        <div><h3>Insertar nuevo producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label> Id:</label>
                            <input className="form-control"
                                // El id va ser de solo lectura para que el usuario no lo edite
                                readOnly
                                type="text"
                                // Por eso el valor del ID va a ser la longitud de nuestro arreglo mas 1 , para que sea nuestro nuemero consecutivo
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label> Nombre: </label>
                            <input class="form-control" name="nombre" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label> Rol:</label>
                            <select class="form-control" name="rol" type="text" onChange={this.handleChange}><option>Administrador</option><option>Vendedor</option><option>Usuario</option></select>
                        </FormGroup>
                        <FormGroup>
                            <label> Estado:</label>
                            <select class="form-control" name="estado" type="text" onChange={this.handleChange}><option>Pendiente</option><option>Autorizado</option><option>No autorizado</option></select>
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
export default Usuarios;
