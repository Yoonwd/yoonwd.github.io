import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BoxMedia from './BoxMedia';
import styles from './realTimeMedia.css';

export default class RealTimeMedia extends Component {
	static propTypes = {
		data: PropTypes.array,
		mounted: PropTypes.func,
	}

	componentDidMount(){
		this.props.mounted(this.slider);
	}
	
	render() {
		const { data , prev, next } = this.props;
		const list = (() => {
			const arr = data.concat();
			let result = [];
			for(const [i, v] of arr.entries()){
				result.push(arr.splice(0, i < 1 ? 1 : 4));
			}
			return result;
		})()
		const settings = {
            dots: false,
            infinite: false,
						speed: 500,
            slidesToShow: list.length,
			slidesToScroll: list.length,
            nextArrow: (() => next)(),
						// prevArrow: prev,
						slidesToShow: 2,
						slidesToScroll: 2,
            responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2    
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1.5,
						slidesToScroll: 1.5
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
        };
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>실시간 이슈관련 맞춤 영상</h1>
					<span className={styles.description}> | AI분석을 통한 '실시간 이슈'에 선정된 추천 동영상</span>
				</div>
				<Slider 
					{...settings}
					ref={_ => this.slider = _}>
					{ list.map((arr, i) => <BoxMedia key={i} data={arr} index={i}/>) }
				</Slider>
			</div>
		)
	}
}
