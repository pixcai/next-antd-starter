import React from 'react'
import Header from '../components/Header'
// css/styles.less -> ../assets/css/styles.less
// see .babelrc for more detail
import styles from 'css/styles.less'

export default class Index extends React.Component {
	
	render() {
		return (
      <div>
        <style jsx global>{styles}</style>
        <Header />
      </div>
		)
	}
}
