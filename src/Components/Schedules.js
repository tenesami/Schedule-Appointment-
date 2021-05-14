import Schedule from './Schedule'

const Schedules = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        {/* loop the tasks and pass the task properties to the shedule */}
        {tasks.map((task) => (
            <Schedule key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle}/>
        )
        )}
        </>
    )
}

export default Schedules;