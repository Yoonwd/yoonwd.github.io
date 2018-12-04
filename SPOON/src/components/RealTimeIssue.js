import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BoxIssue from './BoxIssue';
import styles from './realTimeIssue.css';

export default class RealTimeIssue extends Component {

	static propTypes = {
		data: PropTypes.array
	}

	constructor(props){
		super(props);
		this.state = {
			selected: []
		}
		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(id) {
		
	}

	render() {
		const data = this.props.data || [];
		const settings = {
			dots: false,
            infinite: false,
            speed: 500,
			slidesToShow: 8,
			slidesToScroll: 8,
            responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				}
            ]
		}
	
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>실시간 이슈</h1>
					<span className={styles.description}>AI분석 500개 기사 분석 결과</span>
				</div>
				<Slider {...settings}>
					{ data.map((item, i) => <BoxIssue 
						key={i}
						index={i}
						data={item}
						onSelect={this.onSelect}/>)
					}
				</Slider>
			</div>
		)
	}
}






