import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './boxMedia.css';

export default class BoxMedia extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		data: PropTypes.array.isRequired
	}

	render() {
		const { data, index } = this.props;
		return (
			<div className={styles.container}>
				{
					data.map((item, i) => {
						const { title, imageUrl, videoUrl } = item;
						return(
							<div key={i}
								className={`${styles.item} ${index > 0 && styles.half || ''}`}>
								<div className={`${styles.play} ${index > 0 && styles.small || ''}`}/>
								<img className={styles.image} src={imageUrl} />
								<label className={styles.label}>{title}</label>
							</div>
						)
					})
				}
			</div>
		)
	}
}
