import React, { Component } from 'react';
import Calendar from './Calendar';
import Report from './Report';
import { connect } from 'react-redux';
import { getStockPrice } from '../Actions/Actions';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getstockPriceResponse();
    }

    render() {
        return (
             <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Calendar callBack = {this.renderComponent}/>
                    </div>
                    <div className="col-md-4">
                        <Report />
                    </div> 
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getstockPriceResponse: () => {
      dispatch(getStockPrice())
    }
  }
}


export default connect(null, mapDispatchToProps)(Dashboard);