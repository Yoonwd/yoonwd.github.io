import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './boxKeyword.css';

export default class BoxKeyword extends Component {
	static propTypes = {
		data: PropTypes.object
	}
	render() {
		const { issueKeyword, keywordCategory, imageUrl, count } = this.props.data;
		return (
			<div className={styles.container}>
				<div className={styles.item}>
					<img className={styles.image} src={imageUrl} />
				</div>
				<label className={styles.label}>
					{ issueKeyword }
				</label>
			</div>
		)
	}
}
