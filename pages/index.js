import React from 'react'
import Header from '../components/Header'
// css/styles.scss -> ../assets/css/styles.scss
// see .babelrc for more detail
import styles from 'css/styles.scss'

export default class Index extends React.Component {
	
	render() {
		return (
      <div className="index">
        <style scoped>{`${styles}`}</style>
        <Header />
      </div>
    )
	}
}
