import { FILE_SEND, FILE_UPLOADED, LOAD_INFO_FAIL} from '../actions/actions';

const defaultState = { loading: false, file: null, lastUpdate: null };

export default function upload(state = defaultState, action) {
    switch (action.type) {

        case FILE_SEND:
            console.log(action);
            return { loading: true, file: action.file };

        case FILE_UPLOADED:
            console.log(action);
            return { loading: false, file: action.file, lastUpdate: action.recievedAt };

        case LOAD_INFO_FAIL:
            return { loading: false };

        default:
            return state;
    }
}
