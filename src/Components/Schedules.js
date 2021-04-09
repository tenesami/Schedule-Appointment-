import React from 'react'

const Schedules = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (
            <h4 key={task.id}> {task.text}</h4>
        )
        )}
        </>
    )
}

export default Schedules;