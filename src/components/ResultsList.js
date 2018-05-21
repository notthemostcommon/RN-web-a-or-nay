import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}
SelectableList = wrapState(SelectableList);


 const ResultsList = (props) => {     
    return (
      <div>
        {props.results.map( (result, i) => {
            return (
                <SelectableList defaultValue={props.results.length}>
                    <ListItem
                        key={i}
                        value={i} 
                        primaryText={result.dba} />
                </SelectableList>
           )
       })} 
      </div>
    )
  }

  ResultsList.propTypes = {
      results: PropTypes.array.isRequired, 
      hasErrored: PropTypes.bool.isRequired, 
      isLoading: PropTypes.bool.isRequired, 
  }

const mapStateToProps = state => {
    console.log("mapStatetoProps ResultsList", state.error);
    
    return {
        results: state.results.searchResults, 
        hasErrored: state.error, 
        isLoading: state.loading.searchIsLoading, 
    }
}

export default connect(mapStateToProps)(ResultsList) ; 