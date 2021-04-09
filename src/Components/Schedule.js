import React from 'react'

const Schedule = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (
            <h4 key={task.id}> {task.text}</h4>
        )
        )}
        </>
    )
}

export default Schedule;