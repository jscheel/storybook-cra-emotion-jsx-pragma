import React from 'react'
import PropTypes from 'prop-types'

const NormalExample = ({color}) => {
  return <div style={{
    width: 150,
    height: 150,
    color: 'white',
    backgroundColor: color,
  }}>
    This box should be square and {color}
  </div>
}
NormalExample.propTypes = {
  /**
   * Specify color
   */
  color: PropTypes.oneOf(['red', 'green']),
}

NormalExample.defaultProps = {
  color: 'green',
}


export default NormalExample
