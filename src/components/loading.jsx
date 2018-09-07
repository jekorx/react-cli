import React from 'react'

export default function Loading ({ error, pastDelay }) {
  if (error) {
    return <div style={{ textAlign: 'center' }}>Error!</div>
  } else if (pastDelay) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>
  } else {
    return null
  }
}
