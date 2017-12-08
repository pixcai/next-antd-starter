import { Alert } from 'antd';
import styles from '../assets/css/styles.less';

export default class Index extends React.Component {
	
	render() {
		return (
			<Alert
			message="Success Tips"
			description="Welcome to next-antd-starter."
			type="success"
			showIcon
			/>
		);
	}
}
