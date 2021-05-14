import Schedule from './Schedule'

const Schedules = ({tasks}) => {
    return (
        <>
        {/* loop the tasks and pass the task properties to the shedule */}
        {tasks.map((task) => (
            <Schedule key={task.id} task={task} />
        )
        )}
        </>
    )
}

export default Schedules;