import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import request from '../api/request';
import AppDispatcher from '../actions/AppDispatcher';
import Actions from '../actions/Actions';
import RealTimeIssue from './RealTimeIssue';
import RealTimeMedia from './RealTimeMedia';
import KeywordCustom from './KeywordCustom';
import KeywordRelation from './KeywordRelation';
import styles from './style.css';

// import styles from './style.css'

const data = {
	issueKeywordList: [
		{
			"id": "17d9b695-8983-4d5e-87ee-d0c7dc405c87",
			"imageUrl": 'http://localhost:9999/img/issue_img_01.png',
			"issueKeyword": "조현우",
			"keywordCategory": 'cate1',
			"keywordDate": null,
			"count": 30
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_02.png',
			"issueKeyword": "손흥민",
			"keywordCategory": 'cate3',
			"keywordDate": null,
			"count": 28
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_03.png',
			"issueKeyword": "미스터선샤인",
			"keywordCategory": 'cate2',
			"keywordDate": null,
			"count": 25
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_04.png',
			"issueKeyword": "넥센히어로즈",
			"keywordCategory": 'cate2',
			"keywordDate": null,
			"count": 24
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_05.png',
			"issueKeyword": "송지효",
			"keywordCategory": 'cate1',
			"keywordDate": null,
			"count": 21
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_06.png',
			"issueKeyword": "방탄소년단",
			"keywordCategory": 'cate4',
			"keywordDate": null,
			"count": 20
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_07.png',
			"issueKeyword": "톰크루즈",
			"keywordCategory": 'cate3',
			"keywordDate": null,
			"count": 19
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "인기 메이크업",
			"keywordCategory": 'cate2',
			"keywordDate": null,
			"count": 17
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "대한민국 축구 대표팀",
			"keywordCategory": 'cate4',
			"keywordDate": null,
			"count": 16
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "테스트1",
			"keywordCategory": 'cate2',
			"keywordDate": null,
			"count": 13
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "테스트2",
			"keywordCategory": 'cate3',
			"keywordDate": null,
			"count": 10
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "테스트3",
			"keywordCategory": 'cate1',
			"keywordDate": null,
			"count": 6
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": 'http://localhost:9999/img/issue_img_08.png',
			"issueKeyword": "테스트4",
			"keywordCategory": 'cate3',
			"keywordDate": null,
			"count": 1
		}
	],
	recommandMediaList: [
		{
			"vid": "E1E35326EF768C0BC56064038139B1DA06D8",
			"title": "[PL] 'SON이 필요해' Goals 왓포드 vs 토트넘 골모음",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180903_219/pGxFY_1535907864071reuRs_JPEG/image.JPEG?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=E1E35326EF768C0BC56064038139B1DA06D8&outKey=V124ce72041a69d930054da0b300a64198f86d3be2c45cce47c79da0b300a64198f86&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-09-02T17:04:24.000+0000"
		},
		{
			"vid": "C699C8B90ABC311CF88D3EEBD10207E9A4A1",
			"title": "[UCL] UCL 조추첨- 손흥민,메시와 격돌 죽음의 B조",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180831_16/B8w6g_1535655421156PWKED_JPEG/SGDGSDG.JPG?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=C699C8B90ABC311CF88D3EEBD10207E9A4A1&outKey=V123fd2231916790684b03eede749ff3fc015dc05aac5de97219a3eede749ff3fc015&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-30T18:57:01.000+0000"
		},
		{
			"vid": "FA568D04CD4653E23B7A0EA3696E2C07C1D8",
			"title": "[PL] 'SON의 공백은 내가!' 모우라, 맨유전 활약상",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180828_279/Nx5vS_1535407252047qRL9k_JPEG/PL__vs__4_.00_43_01_13.002.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=FA568D04CD4653E23B7A0EA3696E2C07C1D8&outKey=V1244632aa12bf42a471218d00d22679809a47774bb95476d375218d00d22679809a4&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-27T22:00:52.000+0000"
		},
		{
			"vid": "5F30DAF581056BF17C77B9822D7AE024021C",
			"title": "[PL] '손흥민 교체 출전' Goals 뉴캐슬 vs 토트넘 골모음",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180811_225/v12yp_1533994092993j0RVi_JPEG/PL_Goals_%A9%A6_vs__.00_02_20_16.001.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=5F30DAF581056BF17C77B9822D7AE024021C&outKey=V1212295a6b22fd421f1a21d5deeccae2dec98f25e4118df0323d21d5deeccae2dec9&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-11T13:26:49.000+0000"
		},
		{
			"vid": "06FB4810B9DBA4C37EA90DFA6DEBDBCA80B1",
			"title": "[PL] 'EPL 100번째 출전' 손흥민, 시즌 첫 경기 주요장면",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180811_101/lP1sj_1533995722564XIKTq_JPEG/_01.00_12_32_11.002.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=06FB4810B9DBA4C37EA90DFA6DEBDBCA80B1&outKey=V121290ba133cc0d12fe762ee1b296cddb4ece06acc70cdb502b162ee1b296cddb4ec&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-11T13:55:22.000+0000"
		},
		{
			"vid": "E1E35326EF768C0BC56064038139B1DA06D8",
			"title": "[PL] 'SON이 필요해' Goals 왓포드 vs 토트넘 골모음",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180903_219/pGxFY_1535907864071reuRs_JPEG/image.JPEG?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=E1E35326EF768C0BC56064038139B1DA06D8&outKey=V124ce72041a69d930054da0b300a64198f86d3be2c45cce47c79da0b300a64198f86&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-09-02T17:04:24.000+0000"
		},
		{
			"vid": "C699C8B90ABC311CF88D3EEBD10207E9A4A1",
			"title": "[UCL] UCL 조추첨- 손흥민,메시와 격돌 죽음의 B조",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180831_16/B8w6g_1535655421156PWKED_JPEG/SGDGSDG.JPG?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=C699C8B90ABC311CF88D3EEBD10207E9A4A1&outKey=V123fd2231916790684b03eede749ff3fc015dc05aac5de97219a3eede749ff3fc015&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-30T18:57:01.000+0000"
		},
		{
			"vid": "FA568D04CD4653E23B7A0EA3696E2C07C1D8",
			"title": "[PL] 'SON의 공백은 내가!' 모우라, 맨유전 활약상",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180828_279/Nx5vS_1535407252047qRL9k_JPEG/PL__vs__4_.00_43_01_13.002.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=FA568D04CD4653E23B7A0EA3696E2C07C1D8&outKey=V1244632aa12bf42a471218d00d22679809a47774bb95476d375218d00d22679809a4&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-27T22:00:52.000+0000"
		},
		{
			"vid": "5F30DAF581056BF17C77B9822D7AE024021C",
			"title": "[PL] '손흥민 교체 출전' Goals 뉴캐슬 vs 토트넘 골모음",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180811_225/v12yp_1533994092993j0RVi_JPEG/PL_Goals_%A9%A6_vs__.00_02_20_16.001.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=5F30DAF581056BF17C77B9822D7AE024021C&outKey=V1212295a6b22fd421f1a21d5deeccae2dec98f25e4118df0323d21d5deeccae2dec9&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-11T13:26:49.000+0000"
		},
		{
			"vid": "06FB4810B9DBA4C37EA90DFA6DEBDBCA80B1",
			"title": "[PL] 'EPL 100번째 출전' 손흥민, 시즌 첫 경기 주요장면",
			"imageUrl": "https://phinf.pstatic.net/tvcast/20180811_101/lP1sj_1533995722564XIKTq_JPEG/_01.00_12_32_11.002.jpg?type=f406_228",
			"videoUrl": "https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=06FB4810B9DBA4C37EA90DFA6DEBDBCA80B1&outKey=V121290ba133cc0d12fe762ee1b296cddb4ece06acc70cdb502b162ee1b296cddb4ec&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white",
			"pubDate": "2018-08-11T13:55:22.000+0000"
		}
	],
	customKeywordList: [
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_01.png',
			"issueKeyword": "대한민국 축구 대표팀 아시안게임에서 좋은 성적을 거두고 귀국",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_02.png',
			"issueKeyword": "러블리호텔",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_03.png',
			"issueKeyword": "손흥민 골",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_04.png',
			"issueKeyword": "오승환 무실점",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_05.png',
			"issueKeyword": "4개국 인기 메이크업",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_01.png',
			"issueKeyword": "송지효",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_02.png',
			"issueKeyword": "톰크루즈내한",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_03.png',
			"issueKeyword": "러블리호러블리",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_04.png',
			"issueKeyword": "테스트1",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_05.png',
			"issueKeyword": "테스트2",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_01.png',
			"issueKeyword": "테스트3",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": './img/Lvideo_02.png',
			"issueKeyword": "테스트4",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		}	
	],
	relsKeywordList: [
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "톰크루즈 내한",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "조현우",
			"keywordCategory": null,
			"keywordDate": null,
			"count": 0
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "손흥민 골",
			"keywordCategory": null,
			"keywordDate": null,
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "오승환 무실점",
			"keywordCategory": null,
			"keywordDate": null,
		},
		,
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "4개국 인기 메이크업",
			"keywordCategory": null,
			"keywordDate": null,
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "송지효",
			"keywordCategory": null,
			"keywordDate": null,
		},
		{
			"id": "f1fda205-eaf9-4956-b0e1-9e2722b360c8",
			"imageUrl": null,
			"issueKeyword": "테스트",
			"keywordCategory": null,
			"keywordDate": null,
		}
	]
}

// const $ = window.jQuery;
export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = data;
		this.sliders = [];
    	this.onClickPrev = this.prev.bind(this);
		this.onClickNext = this.next.bind(this);
		this.mounted = this.mounted.bind(this);
	}

	componentDidMount(){
		// this.registID = AppDispatcher.register(this.onDispatching.bind(this));
        // request.requestIssueData(this.props.keyword);
	}

	prev() {
		this.sliders.map(slider => slider && slider.slickPrev());
	}

	next() {
		this.sliders.map(slider => slider && slider.slickNext());
	}

	mounted(slider) {
		this.sliders.push(slider);
	}

	onDispatching(e) {
        switch(e.type){
            case Actions.RECEIVED_BUBBLE_DATA:
            this.setState(
                update(this.state, { data: {  $set: e.data } })
            )
        }
    }

  	render () {
		const { issueKeywordList, recommandMediaList, customKeywordList, relsKeywordList } = this.state;
		
		return (
			<div className={styles.container}>
				<RealTimeIssue data={issueKeywordList}/>
				<div className={styles.controls}>
					<div className={styles.prev} onClick={this.onClickPrev}/>
					<div className={styles.next} onClick={this.onClickNext}/>
				</div>
				<div className={styles.background_box}>
				<RealTimeMedia data={recommandMediaList} mounted={this.mounted}/>
				<KeywordCustom data={customKeywordList} mounted={this.mounted}/>
				<KeywordRelation data={relsKeywordList} mounted={this.mounted}/>
				</div>
				<div className={styles.float_icon_wrap}>
					<div className={styles.icon_box}><button className={`${styles.icons} ${styles.icons_01} ${styles.button}`}></button></div>
					<div className={styles.icon_box}><button className={`${styles.icons} ${styles.icons_02} ${styles.button}`}></button></div>
					<div className={styles.icon_box}><button className={`${styles.icons} ${styles.icons_03} ${styles.button}`}>시작하기</button></div>
					<div className={styles.icon_box}><button className={`${styles.icons} ${styles.icons_04} ${styles.button}`}>시작하기</button></div>
				</div>
			</div>	
		)
	}
}

