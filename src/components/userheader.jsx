import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '@styles/components'

export default class UserHeader extends PureComponent {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func
  }
  render () {
    const { avatar, name, onClick } = this.props
    return (
      <figure className={styles.user} onClick={onClick}>
        <img src={avatar} className={styles.avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    )
  }
}
