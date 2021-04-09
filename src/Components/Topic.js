import PropTypes from 'prop-types'
import Button from './Button'


const Topic = ({ title}) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
        {/* <button className='btn'>Add</button> */}
        <Button color='blue' text='Add' onClick={onClick}/>
    </header>
  )
}

Topic.defaultProps = {
  title: 'Schedule',
}

Topic.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Topic;