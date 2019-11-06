import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const InfoSerie = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const [data, setData] = useState({})

    useEffect(() => {
        axios
            .get('/api/series/' + match.params.id)
            .then(res => {
                setData(res.data)
            })
    }, [match.params.id])

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
            .post('/api/series', { name })
            .then(res => setSuccess(true))
    }
    if (success) {
        return <Redirect to='/series' />
    }
    return (
        <div>
            <header>
                <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)' }}>
                    <div className="h-100 container">
                        <div className="row">
                            <div className="col-3">
                                <img src={data.poster} className='img-fluid img-thumbnail' alt={data.name} />
                            </div>
                            <div className="col-8">
                                titulo
                        </div>
                        </div>
                    </div>
                </div>
            </header>
            <pre>{JSON.stringify(data)}</pre>
            <div className='conteiner'>
                <h1>Novo Série</h1>
                <form>
                    <div className='form-group'>
                        <label for='name'>Nome</label>
                        <input type='name' className='form-control' onChange={onChange} id='name' placeholder='Nome do Gênero' />
                    </div>
                    <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
                </form>
            </div>
        </div>
    )

}

export default InfoSerie