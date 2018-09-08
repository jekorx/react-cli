import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '@styles/user'
import Item from './item'

export default class Relevant extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array
  }
  render () {
    const { data, title } = this.props
    return (
      <div className={styles.relevant}>
        <h3 className={styles.type}>{title}</h3>
        {data.map(t =>
          <Item key={t.id} data={t} />
        )}
      </div>
    )
  }
}
