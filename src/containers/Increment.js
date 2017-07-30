import { connect } from "react-redux";
import * as actions from "../actions/counter";
import Increment from "../components/Increment";



const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

export default connect (mapStateToProps, actions)(Increment);





