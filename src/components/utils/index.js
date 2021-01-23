import React from 'react'

const loadingIcon = (
    <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
    </div>
)

const NotFound = () => (
    <div
        style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <h1 style={{ color: 'black' }}>No hay datos disponibles.</h1>
    </div>
)

const Loading = () => (
    <div
        style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {loadingIcon}
    </div>
)

const LoadingPage = () => (
    <div
        style={{
            height: 'calc(100vh - 64px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        {loadingIcon}
    </div>
)

const NotFound404 = () => (
    <div
        style={{
            background: '#FFF',
            height: 'calc(100vh - 6rem)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <h1 style={{ color: 'black' }}>Página no encontrada :(</h1>
    </div>
)

const reduce = json => {
    const variables = Object.keys(json).reduce((acc, key) => {
        const _acc = acc
        if (json[key] !== undefined && json[key] !== null) {
            _acc[key] = json[key].replace(/\s+/gi, ' ').trim()
        }
        return _acc
    }, {})

    return variables
}

export {
    NotFound,
    Loading,
    NotFound404,
    LoadingPage,
    reduce
}
