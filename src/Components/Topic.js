import PropTypes from 'prop-types'
import Button from './Button'


const Topic = ({ title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
        {/* <button className='btn'>Add</button> */}
        <Button color={showAdd ? 'Red' : 'Green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
                />
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