/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import {css, jsx} from '@emotion/core'

// import css from '@emotion/css/macro'

const box = css`
  width: 150px;
  height: 150px;
  background-color: gray;
  color: white;
`

const red = css`
  background-color: red;
`

const green = css`
  background-color: green;
`

const colors = {red, green}

const EmotionExample = ({color}) => {
  return <div css={[box, colors[color]]}>This box should be square and {color}</div>
}
EmotionExample.propTypes = {
  /**
   * Specify color
   */
  color: PropTypes.oneOf(['red', 'green']),
}

EmotionExample.defaultProps = {
  color: 'green',
}


export default EmotionExample
