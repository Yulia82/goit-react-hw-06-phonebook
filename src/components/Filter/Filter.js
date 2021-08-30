import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styles";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: evt =>
    dispatch(actions.filterChange(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
