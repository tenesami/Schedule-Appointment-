import {useState} from 'react'
import Topic from './Components/Topic'
import Schedules from './Components/Schedules'

const App = () => {
const [tasks, setTasks] = useState(
  [
    {
      id: 1,
      text: 'Talk to Kids',
      day: 'Feb 12th at 12:12am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Workout',
      day: 'Nov 12th at 1:12pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Read Mini Habit',
      day: 'Sep 21th at 3:12am',
      reminder: true,
    },
  ]
)

//Delete schedule fuction 
const deleteSchedule = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

return (
<div className='container'>
  <Topic/>
  {tasks.length > 0 ? 
    <Schedules tasks={tasks} 
    onDelete={deleteSchedule}/>
   : 
    'No Schdule to read'  
  }
  
</div>
); 
}
export default App;