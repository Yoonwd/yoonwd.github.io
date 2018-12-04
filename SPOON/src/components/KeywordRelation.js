import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './keywordRelation.css';
import BoxRelation from './BoxRelation';



export default class KeywordRelation extends Component {

	static propTypes = {
		data: PropTypes.array,
		mounted: PropTypes.func
	}

	componentDidMount(){
		this.props.mounted(this.slider);
	}

	render() {
		const data = this.props.data || [];
		return (
			<div className={styles.container}>
				{ data.map((item, i) => {
					return (
						<BoxRelation key={i}
							data={item.issueKeyword}
						/>
					)
				}) }
			</div>
		)
	}
}
