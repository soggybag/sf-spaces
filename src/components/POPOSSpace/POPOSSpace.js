import React from 'react'
import { Link } from 'react-router-dom'
import styles from './POPOSSpace.module.css'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props

  return (
    <div className={styles.POPOSSpace}>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={name}
        />
      </Link>

      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>

      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default POPOSSpace;