import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../../components/pagination/Pagination';
import { setFilters } from '../../actions/sensorsFiltersActions';

const PaginationContainer = ({ pageCount, setFilters, sensorsFilters }) => {
  const handleChangePage = page => {
    setFilters({
      page,
    });
  };

  return (
    <Pagination
      pageCount={pageCount}
      onClick={handleChangePage}
      current={sensorsFilters.page}
    />
  );
};

const mapStateToProps = ({ pagination, sensorsFilters }) => ({
  pageCount: pagination.pageCount,
  sensorsFilters,
});

const mapDispatchToProps = { setFilters };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationContainer);
