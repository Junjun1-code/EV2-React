import Form from 'react-bootstrap/Form';
import api from '../api.js';
import { useState, useEffect } from 'react';

function search() {
    const [parametro, setParametro] = useState('');
    const [texto, setTexto] = useState('');

    const ModificarParametro = (valor) => {
        setParametro(valor)
    }

    const Busqueda = async (parametro, texto) => {
        api(parametro + texto)
    }

    return (
        <>
            <Form.Select aria-label="Default select example" onChange={ModificarParametro(this.value)}>
                <option>Tipo de busqueda</option>
                <option value="search.php?s="> Buscar bebida por nombre </option>
                <option value="search.php?i="> Buscar bebida por ingrediente </option>
                <option value="search.php?f="> Buscar por inicial </option>
            </Form.Select>
            <Form.Control type="text" placeholder="Buscar" onChange={setTexto(this.value)} />
            <button onClick={Busqueda(parametro, texto)}>Buscar</button>
            
            {/* Entrega de datos a main.jsx */}
        </>
    )
}

export default search