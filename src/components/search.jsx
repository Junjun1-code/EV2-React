import Form from 'react-bootstrap/Form';
import Api from '../api.js';
import { useState } from 'react';

function Search( {setDrinks} ) {
    const [parametro, setParametro] = useState('');
    const [texto, setTexto] = useState('');

    const buscar = async () => {
        const data = await Api(parametro, texto);
        setDrinks(data);
    };

    return (
        <>
            <Form.Select
                aria-label="Default select example"
                value={parametro}
                onChange={(e) => setParametro(e.target.value)}
            >
                <option value="">Tipo de busqueda</option>
                <option value="search.php?s=">Buscar bebida por nombre</option>
                <option value="search.php?i=">Buscar bebida por ingrediente</option>
                <option value="search.php?f=">Buscar por inicial</option>
            </Form.Select>

            <Form.Control
                type="text"
                placeholder="Buscar"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button type="button" onClick={buscar}>Buscar</button>
        </>
    );
}

export default Search;