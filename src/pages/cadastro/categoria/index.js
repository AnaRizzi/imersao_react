import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,           
        })
    }

    function handleChange(infosDoEvento) {
        setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
    }

    useEffect(() => {
        console.log("Coisa que irá acontecer como primeiro parâmetro");
        const URL = 'http://localhost:8080/categorias';
        fetch(URL).then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            setCategorias([
                ...resposta,
            ]);
        })
        // setTimeout(() => {
            
        // }, 3000);
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);

            }}>

                <FormField 
                    label='Nome da categoria'
                    name='nome'
                    values={values.nome} 
                    onChange={handleChange} 
                />

                <FormField 
                    label='Descrição'
                    type='textarea'
                    name='descricao'
                    values={values.descricao} 
                    onChange={handleChange} 
                />
                
                <FormField 
                    label='Cor'
                    type='color'
                    name='cor'
                    values={values.cor} 
                    onChange={handleChange} 
                />
                
                <Button>
                    Cadastrar
                </Button>

            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;