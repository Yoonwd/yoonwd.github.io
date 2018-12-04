import AppDispatcher from './AppDispatcher';
import Actions from './Actions';

export default {
    receivedIssueData(data) {
        AppDispatcher.dispatch({
            type: Actions.RECEIVED_ISSUE_DATA,
            data: data
        })
    },
    showErrorMessage(msg){
        alert(msg);
    }
}

