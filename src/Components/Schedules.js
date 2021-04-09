import Schedule from './Schedule'

const Schedules = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (
            <Schedule key={task.id} task={task} />
        )
        )}
        </>
    )
}

export default Schedules;