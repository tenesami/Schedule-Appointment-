import React from 'react'
import PropsTypes from 'props-types'

export const Topics = ({header}) => {
    return (
       <header>
           <h1>{header}</h1>
       </header>
    )
}
Topics.defaultProps = {
    title: "Schedule Appontment",
}
Topics.prototype = {
    title: PropsTypes.string.isRequired,
}
