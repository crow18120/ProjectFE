import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Toolbar,
  InputAdornment,
  TextField,
} from "@material-ui/core";
// icon
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { Visibility } from "@material-ui/icons";
// core components
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    labelSearch,
    setClassicModal,
    setIndex,
    setIsOpen,
    idData,
    confirmDialog,
    setConfirmDialog,
    fnDelete,
  } = props;

  const pages = [5, 10, 25];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
  const [filterFn, setFilterFn] = React.useState({
    fn: (items) => {
      return items;
    },
  });

  const [tableDataAfterPaging, setTableDataAfterPaging] = React.useState(
    filterFn.fn(tableData).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
  );

  const [tableDataAfterSorting, setTableDataAfterSorting] = React.useState(
    filterFn.fn(tableData)
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearch = (e) => {
    let target = e.target;

    setFilterFn({
      fn: (items) => {
        if (target.value.trim() === "" || target.value === undefined)
          return items;
        else
          return items.filter(
            (x) =>
              x[1].toLowerCase().includes(target.value.toLowerCase().trim()) ||
              x[2].toLowerCase().includes(target.value.toLowerCase().trim())
          );
      },
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setTableDataAfterPaging(
      filterFn.fn(tableData).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  }, [page, rowsPerPage, filterFn, tableData]);

  React.useEffect(() => {
    setTableDataAfterSorting(filterFn.fn(tableData));
    setPage(0);
  }, [filterFn, tableData]);

  return (
    <div className={classes.tableResponsive}>
      <Toolbar>
        <TextField
          variant="outlined"
          label={labelSearch}
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
        <Button
          startIcon={<AddIcon />}
          className={classes.btnAdd}
          onClick={() => {
            setClassicModal(true);
            setIndex(-1);
          }}
          color="primary"
          sz={"lg"}
        >
          Add new
        </Button>
      </Toolbar>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableDataAfterPaging.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell}>
                  <Button
                    color="info"
                    size="sm"
                    onClick={() => {
                      setIsOpen(true);
                      setIndex(tableDataAfterPaging[key][0] - 1);
                    }}
                  >
                    <Visibility fontSize="small" />
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    onClick={() => {
                      setClassicModal(true);
                      setIndex(tableDataAfterPaging[key][0] - 1);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Button>
                  <Button color="danger" size="sm">
                    <DeleteForeverOutlinedIcon
                      fontSize="small"
                      onClick={() => {
                        setConfirmDialog({
                          ...confirmDialog,
                          isOpen: true,
                          title: "Delete ?",
                          subTitle: `You can undo this action. This class will be delete.`,
                          onConfirm: async () => {
                            await fnDelete(
                              idData[tableDataAfterPaging[key][0] - 1]
                            );
                          },
                        });
                      }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={tableDataAfterSorting.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      ></TablePagination>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
