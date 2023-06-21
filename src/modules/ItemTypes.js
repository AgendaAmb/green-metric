import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

export const ItemTypes = {
    FILE: 'file'
}

const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FILE,
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
}))