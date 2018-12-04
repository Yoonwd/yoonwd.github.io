import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BoxKeyword from './BoxKeyword';

export default class CustomKeyword extends Component {

	static propTypes = {
		data: PropTypes.array,
		mounted: PropTypes.func
	}

	componentDidMount(){
		this.props.mounted(this.slider);
	}

	render() {
		const data = this.props.data || [];
		const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
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
						slidesToShow: 5,
						slidesToScroll: 5
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
		};

		
		return (
			<div>
				<Slider 
					{...settings}
					ref={_ => this.slider = _}>
					{ data.map((item, i) => <BoxKeyword key={i} data={item} />) }
				</Slider>
			</div>
		)
	}
}
