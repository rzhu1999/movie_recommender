import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  // Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
// import getInitials from '../../utils/getInitials';

const RecResults = ({ dataObject, ...rest }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = dataObject.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedIds.slice(1)
      );
    } else if (selectedIndex === selectedIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedIds.slice(0, selectedIndex),
        selectedIds.slice(selectedIndex + 1)
      );
    }

    setSelectedIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            {/* 表头 */}
            <TableHead>
              <TableRow key="head">
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.length === dataObject.length}
                    color="primary"
                    indeterminate={
                      selectedIds.length > 0 && selectedIds.length < dataObject.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Rank</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Vote_count</TableCell>
                <TableCell>Vote_average</TableCell>
                <TableCell>Weighted_score</TableCell>
              </TableRow>
            </TableHead>
            {/* 表主体 */}
            <TableBody>
              {dataObject.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedIds.indexOf(customer.id) !== -1}
                >
                  {/* 第1列 */}
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  {/* 第2列 */}
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(customer.name)}
                      </Avatar> */}
                      <Typography color="textPrimary" variant="body1">
                        {customer.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  {/* 第3列 */}
                  <TableCell>{customer.title}</TableCell>
                  {/* 第4列 */}
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                    {customer.vote_count}
                  </TableCell>
                  {/* 第5列 */}
                  <TableCell>{customer.vote_average}</TableCell>
                  {/* 第6列 */}
                  <TableCell>{customer.weighted_score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <TablePagination
        component="div"
        count={dataObject.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

RecResults.propTypes = {
  dataObject: PropTypes.array.isRequired
};

export default RecResults;
