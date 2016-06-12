import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
          <div className={styles.content}>
            {this.props.places.map(place => {
              return (<div key={place.id}>{place.name}</div>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
