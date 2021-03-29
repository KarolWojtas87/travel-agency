import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeDuration, addingTag, removingTag } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),

  changeDuration: value => dispatch(changeDuration(value)),

  addingTag: tag => dispatch(addingTag(tag)),
  removingTag: tag => dispatch(removingTag(tag)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
