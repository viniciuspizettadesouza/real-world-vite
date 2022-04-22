import React from 'react';
import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({type: APPLY_TAG_FILTER, tag, pager, payload}),
  onLoad: (tab, pager, payload) =>
    dispatch({type: HOME_PAGE_LOADED, tab, pager, payload}),
  onUnload: () =>
    dispatch({type: HOME_PAGE_UNLOADED})
});

class Home extends React.Component {
  componentWillMount () {
    const tab = this.props.token ? 'feed' : 'all';
  }

  componentWillUnmount () {
    this.props.onUnload();
  }

  render () {
    console.log(this.props);
    return (
      <div className="home-page">
        <Banner token={ this.props.token } appName={ this.props.appName }/>
        <div className="container page">
          <div className="row">
            <MainView/>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <Tags
                  tags={ this.props.tags }
                  onClickTag={ this.props.onClickTag }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
