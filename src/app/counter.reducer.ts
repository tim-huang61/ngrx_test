import { CounterState, INITIAL_COUNTER_STATE } from './counter.store';
import { DECREMENT, INCREMENT, RESET } from './counter.action';

// export function counterReducer(state: CounterState = INITIAL_COUNTER_STATE, action: any): CounterState {
//     const { type, payload } = action;
//     console.log(action);
//     switch (type) {
//         case INCREMENT:
//                 const x = { ...state, counter: state.counter + payload.value };
//                 console.log(x);
//             return x;
//         case DECREMENT:
//             return { ...state, counter: state.counter - payload.value };
//         case RESET:
//             return INITIAL_COUNTER_STATE;
//         default:
//             return state;
//     }
// }

export function counterReducer(state: number = 0, action: any) {
    console.log(state);
    const { type, payload } = action;
    switch (type) {
        case INCREMENT:
            return state += 1;
        case DECREMENT:
            return state -= 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
