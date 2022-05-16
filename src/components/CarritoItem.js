import React from 'react'
import { memo, useEffect } from 'react'

const CarritoItem = ({usuario}) => {
    return (
        <div>
            <h3>{usuario.nombre}</h3>
        </div>
    )
}

export default memo(CarritoItem)
