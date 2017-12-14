import React from 'react'
import Header from '../components/Header'

export default class Index extends React.Component {
	
	render() {
		return (
      <div className="index">
        {/* you can write scss inside <style jsx> */}
        <style jsx>{`.index { color: green; }`}</style>
        <Header />
      </div>
    )
	}
}
