import {InitialStateType, setValuesAC} from "../../redux/counter-reducer";
import {AppDispatch, RootState} from "../../redux/store";
import {Setter} from "./Setter";
import {connect} from "react-redux";


type mapStateToPropsType = {
    state: InitialStateType
}
type mapDispatchToPropsType = {
    onClickSet: () => void
}
export type SetterPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        state: state.counter
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        onClickSet: () => dispatch(setValuesAC(2,10))
    }
}

export const SetterContainer = connect(mapStateToProps, mapDispatchToProps)(Setter)