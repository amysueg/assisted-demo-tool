import { connect } from 'react-redux';

import { getCurrentStepBullets } from 'state/demos/selectors.js';

import TextUl from 'ui/shared/components/TextUl.js';

const mapStateToProps = state => {
  return {
    className: 'bullet-list',
    stringArray: getCurrentStepBullets(state)
  };
};

const mapDispatchToProps = () => ({});

const CurrentStepBulletsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextUl);

export default CurrentStepBulletsContainer;
