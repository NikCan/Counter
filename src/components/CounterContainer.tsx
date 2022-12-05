import {AppDispatch, RootState} from "../redux/store";
import {AC} from "../redux/counter-reducer";
import {connect} from "react-redux";
import {Counter} from "./Counter";

type mapStateToPropsType = {
    state: RootState
}
type mapDispatchToPropsType = {
    function: () => void
}
export type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        function: () => dispatch(AC())
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)