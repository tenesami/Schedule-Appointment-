import {useState} from 'react'
import Topic from './Components/Topic'
import Schedules from './Components/Schedules'
import AddSchedule from './Components/AddSchedule'

const App = () => {
  const [showAddSchedule, setShowAddSchedule] = useState(false)
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

//Add schedule 
const addSchedule = (task) => {
  console.log(task)
}

//Delete schedule fuction 
const deleteSchedule = (id) => {
  setTasks(
    tasks.filter(task => 
      task.id !== id))
}

//onToggle function
const toggleReminder = (id) =>{
  //if task id is equal to id change task to negation 
  setTasks(
    tasks.map(task => 
      task.id === id ? { 
        ...task, reminder: 
        !task.reminder } : task
    )  
  )
}


return (
<div className='container'>
  <Topic onAdd={()=> setShowAddSchedule(!showAddSchedule)}
  showAdd={showAddSchedule}
  />
  {showAddSchedule && <AddSchedule onAdd={addSchedule}/>}
  {tasks.length > 0 ? 
    <Schedules tasks={tasks} 
    onDelete={deleteSchedule}
    onToggle={toggleReminder}/>
   : 
    'No Schdule to read'  
  }
  
</div>
); 
}
export default App;