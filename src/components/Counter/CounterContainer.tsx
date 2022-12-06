import {AppDispatch, RootState} from "../../redux/store";
import {incValueAC, InitialStateType, resetValueAC} from "../../redux/counter-reducer";
import {connect} from "react-redux";
import {Counter} from "./Counter";

type mapStateToPropsType = {
    state: InitialStateType
}
type mapDispatchToPropsType = {
    onClickReset: () => void
    onClickInc: () => void
}
export type CounterPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        state: state.counter
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        onClickReset: () => dispatch(resetValueAC()),
        onClickInc: () => dispatch(incValueAC())
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)