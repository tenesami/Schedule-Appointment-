import {useState} from 'react'
import Topic from './Components/Topic'
import Schedule from './Components/Schedule'

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
return (
<div className='container'>
  <Topic/>
  <Schedule tasks={tasks}/>
</div>
); 
}
export default App;