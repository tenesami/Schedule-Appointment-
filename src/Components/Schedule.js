import {FaTimes} from 'react-icons/fa'

const Schedule = ({task}) => {
    return (
        <div className='task'>
            {/* dispaly the Schedule properties  */}
            <h4> {task.text} <FaTimes style={{color: 'red',
            cursor: 'pointer'}} />
            </h4>
            <p> {task.day}</p>
        </div>
    )
}

export default Schedule