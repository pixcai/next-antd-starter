import React from 'react'
import Header from 'components/Header'
import styles from 'css/index.scss'

export default class Index extends React.Component {
	
	render() {
    return (
      <div>
        <style scoped>{`${styles}`}</style>
        <Header />
      </div>
    )
	}
}
