import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TweenMax, Elastic } from 'gsap';
import styles from './boxIssue.css';

export default class BoxIssue extends Component {
	static propTypes = {
		data: PropTypes.object,
		index: PropTypes.number,
		onSelect: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state = {
			selected: false
		}
		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(){
		const { index, onSelect } = this.props;
		this.setState({selected: !this.state.selected })
		onSelect(index);
	}

	componentDidUpdate(){
		const { selected } = this.state;
		const dom = ReactDOM.findDOMNode(this);
		TweenMax.to(dom, 0.3, { scale: selected ? 1.01 : 1 })
	}

	render() {
		const { data } = this.props;
		const { selected } = this.state;
		const { issueKeyword, keywordCategory, imageUrl} = data;
		
		return (
			<div className={styles.container}
				onClick={this.onSelect}>
				<div className={`${styles.item} ${selected && styles.selected || ''}`}>
					<div className={`${styles.badge} ${styles[keywordCategory]}`}/>
					<img className={styles.image} src={imageUrl} />
				</div>
				<label className={styles.label}>
					{ issueKeyword }
				</label>
			</div>
		)
	}
}
