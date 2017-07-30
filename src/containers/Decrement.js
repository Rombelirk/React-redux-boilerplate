import { connect } from "react-redux";
import * as actions from "../actions/counter";
import Decrement from "../components/Decrement";



const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

export default connect (mapStateToProps, actions)(Decrement);