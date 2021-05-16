import {FaTimes} from 'react-icons/fa'

const Schedule = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onToggle(task.id)}>
            {/* dispaly the Schedule properties  */}
            <h4> {task.text} <FaTimes style={{color: 'red',
            cursor : 'pointer'}} 
            // onClick event to onDelete  
            onClick={() => onDelete(task.id)} />
            </h4>
            <p> {task.day}</p>
        </div>
    )
}

export default Schedule