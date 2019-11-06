import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

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
    )

}

export default NovaSerie