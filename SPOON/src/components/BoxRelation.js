import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './boxRelation.css';

export default class BoxRelation extends Component {

	static propTypes = {
		data: PropTypes.string,
	}

	constructor(props){
		super(props);
		this.state = {
			selected: false
		}
	}

	componentDidMount() {
		window.jQuery(document).on('post.bubble.keywords', (e, data) => {
			const selected = data && data.some(keyword => {
				return keyword.replace(/\-/g, ' ').match(this.props.data) !== null;
			}) || false;
			this.setState({selected: selected});
		})
	}

	render() {
		const { data } = this.props;
		const { selected } = this.state;
		return (
			<div className={`${styles.container} ${selected && styles.selected || ''}`}>
				<label className={styles.label}>
					{ `#${data}` }
				</label>
			</div>
		)
	}
}
