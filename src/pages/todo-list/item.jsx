import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

@observer
export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  render () {
    const { content, finished, toggle } = this.props.todo
    return (
      <Fragment>
        <input
          type="checkbox"
          value={finished}
          onClick={() => toggle()}
        />
        <P className={finished ? 'finished' : ''}>{content}</P>
      </Fragment>
    )
  }
}

const P = styled.p`
  margin: 0;
  padding-left: 10px;
  padding-right: 20px;
  display: inline-block;
  &.finished {
    text-decoration: line-through
  }
`
