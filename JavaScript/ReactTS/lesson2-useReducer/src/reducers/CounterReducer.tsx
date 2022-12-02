
type CounterState = {
    count:number
}
type ResetAction = {
    type:'reset'
}
type UpdateAction = {
    type:'increment' | 'decrement',
    payload:number
}
type CounterAction = UpdateAction | ResetAction;


const CounterReducer=(state:CounterState,action:CounterAction)=>{
            switch (action.type) {
                case 'increment':
                    return {count: state.count + action.payload}
                case 'decrement':
                    return {count: state.count - action.payload}
                case 'reset':
                    return {count:0}
                default:
                    return {count:state.count}
            }
}

export default CounterReducer