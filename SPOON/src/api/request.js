import ActionCreator from '../actions/ActionCreator';

const api = 'https://v2.chajazoom.io/sv/brain/api/service/spoon';
const option = data => {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

export default {
    requestIssueData(keyword) {
        fetch(`${api}/keyword?suid=chajazoom`, option({
            request: [{
                sessionId: '',
				device: '',
				requestInfos: [{
					keywordId: '',
					keyword: '',
					videoId: '',
					regDate: ''
				}]
            }]
        }))
        .then(res => res.json())
        .then(res => {
            if(res.code === 'SUCCESS'){
                ActionCreator.receivedIssueData(res.data);
            } else {
                ActionCreator.showErrorMessage('데이터를 받아오지 못했습니다.');
            }
        })
        .catch(err => {
            ActionCreator.showErrorMessage(err);
        })
    }
};

