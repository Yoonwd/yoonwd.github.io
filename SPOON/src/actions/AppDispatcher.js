import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
    dispatch(action={}){
        console.log('action:',action);
        //이벤트 전파가 이미 진행중이라면 전파지연
        if(super.isDispatching()){
            setTimeout(() => super.dispatch(action) , 0);
        //전파가 진행중인 이벤트가 없다면 바로 전파
        }else{
            super.dispatch(action);
        }
    }
}

export default new AppDispatcher();
