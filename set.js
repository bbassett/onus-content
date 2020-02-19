import { Component } from 'react';
import { register } from './registry.js';

class Set extends Component {
  componentWillReceiveProps(next) {
    // TODO unregister old names/depths
  }

  componentWillUnmount() {
    register(this.props.name, null, this.props.depth);
  }

  render() {
    var props = this.props;

    var location = props.prepend ?
      1 :
      props.append ?
        2 :
        0;

    console.log(props)
    register(props.name, props.children, props.depth, location);
    return false;
  }
}

export default Set;