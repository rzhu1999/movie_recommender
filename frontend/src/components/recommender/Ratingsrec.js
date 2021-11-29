import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Link,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card
} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Ratingsrec = ({ history, dataObject, ...rest }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  
  const handleSelectAll = (event) => {
    let newSelectedIds;

    if (event.target.checked) {
      newSelectedIds = dataObject.map((movieIns) => movieIns.id);
    } else {
      newSelectedIds = [];
    }

    setSelectedIds(newSelectedIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedIds.indexOf(id);
    let newSelectedIds = [];

    if (selectedIndex === -1) {
      newSelectedIds = newSelectedIds.concat(
        selectedIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedIds = newSelectedIds.concat(
        selectedIds.slice(1)
      );
    } else if (selectedIndex === selectedIds.length - 1) {
      newSelectedIds = newSelectedIds.concat(
        selectedIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedIds = newSelectedIds.concat(
        selectedIds.slice(0, selectedIndex),
        selectedIds.slice(selectedIndex + 1)
      );
    }

    setSelectedIds(newSelectedIds);
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
                <TableCell>Date</TableCell>
                <TableCell>Movie id</TableCell>
                {/* <TableCell>Vote Average</TableCell> */}
                {/* <TableCell>Overview</TableCell> */}
              </TableRow>
            </TableHead>
            {/* 表主体 */}
            <TableBody>
              {dataObject.map((movieIns) => (
                <TableRow
                  hover
                  key={movieIns.id}
                  selected={selectedIds.indexOf(movieIns.id) !== -1}
                >
                  {/* 第1列 */}
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.indexOf(movieIns.id) !== -1}
                      onChange={(event) => handleSelectOne(event, movieIns.id)}
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
                     <Link onClick={() => history.push(`/app/${movieIns.tmdbId}`)}>
                      <Typography color="textPrimary" variant="body1" style={{cursor: 'pointer'}}>
                        {movieIns.original_title}
                      </Typography>
                      </Link>
                      <Avatar style={{cursor: 'pointer'}}
                      onClick={() => history.push(`/app/${movieIns.tmdbId}`)}
                       sx={{ mr: 2 }}> 
                        <SearchOutlinedIcon />
                      </Avatar> 
                    </Box>
                  </TableCell>
                  {/* 第3列 */}
                  <TableCell>
                 
                    {moment().format('YYYY-MM-DD')}
                  </TableCell>
                  {/* 第4列 */}
                  <TableCell>
                    {movieIns.tmdbId}
                  </TableCell>
                  {/* 第5列 */}
                  {/* <TableCell>{movieIns.vote_average}</TableCell> */}
                  {/* 第6列 */}
                  {/* <TableCell> */}
                    {/* {movieIns.id} */}
                   {/* {movieIns.overview} */}
                  {/* </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Ratingsrec.propTypes = {
  dataObject: PropTypes.array.isRequired
};

export default Ratingsrec;
