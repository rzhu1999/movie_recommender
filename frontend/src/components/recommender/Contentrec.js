import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  // Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const RecResults = ({ history, dataObject, ...rest }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  
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
                <TableCell>Title</TableCell>
                <TableCell>Overview</TableCell>
                <TableCell>Vote Count</TableCell>
                <TableCell>Vote Average</TableCell>
                <TableCell>Release Year</TableCell>
              </TableRow>
            </TableHead>
            {/* 表主体 */}
            <TableBody>
              {dataObject.map((customer) => (
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
                        display: 'flex',
                        justifyContent:'space-between'
                      }}
                    >
                     
                      <Typography color="textPrimary" variant="body1">
                        {customer.title}
                      </Typography>
                      <Avatar 
                      onClick={() => history.push(`/app/${customer.tmdbId}`)}
                       sx={{ mr: 2 }}> 
                        <SearchOutlinedIcon />
                      </Avatar> 
                    </Box>
                  </TableCell>
                  {/* 第3列 */}
                  <TableCell>
                    {/* {customer.overview} */}
                    {/* <Button onClick={() => history.push(`/app/${customer.tmdbId}`)}>  */}
                    {customer.tmdbId}
                    {/* </Button> */}
                  </TableCell>
                  {/* 第4列 */}
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                    {customer.vote_count}
                  </TableCell>
                  {/* 第5列 */}
                  <TableCell>{customer.vote_average}</TableCell>
                  {/* 第6列 */}
                  <TableCell>{moment(customer.release_date).format('YYYY')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

RecResults.propTypes = {
  dataObject: PropTypes.array.isRequired
};

export default RecResults;
