import {InitialStateType, setValuesAC} from "../../redux/counter-reducer";
import {AppDispatch, RootState} from "../../redux/store";
import {Setter} from "./Setter";
import {connect} from "react-redux";


type mapStateToPropsType = {
    state: InitialStateType
}
type mapDispatchToPropsType = {
    onClickSet: (maxValue: number, startValue: number) => void
}
export type SetterPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        state: state.counter
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        onClickSet: (maxValue, startValue) => dispatch(setValuesAC(maxValue,startValue))
    }
}

export const SetterContainer = connect(mapStateToProps, mapDispatchToProps)(Setter)