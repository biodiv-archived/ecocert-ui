import { Button, DataTable } from "carbon-components-react";
import { navigate } from "gatsby";
import React, { Component } from "react";

import { TABLE_HEADER_FIELDS } from "./createBatchingTable.constants";
import { IBatching, IBatchingFuncs } from ".@interfaces/batching.interface";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarContent
} = DataTable;

interface IProps extends IBatchingFuncs {
  batching: IBatching;
}

export default class CreateBatchingTableComponent extends Component<IProps> {
  selectRow;

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getCollectionData(true);
  };

  createBatch = selectedRows => () => {
    navigate("/collection-center/batch/create", {
      state: { sCollections: selectedRows.map(r => r.id) }
    });
  };

  render() {
    return (
      <>
        <DataTable
          rows={this.props.batching.collectionData || []}
          headers={TABLE_HEADER_FIELDS}
          render={({
            rows,
            headers,
            getHeaderProps,
            getSelectionProps,
            selectedRows
          }) => (
            <React.Fragment>
              <TableContainer>
                <TableToolbar>
                  <h1 className="eco--title">Collections</h1>
                  <TableToolbarContent>
                    <Button
                      className="eco--spacing-top"
                      disabled={selectedRows.length < 1}
                      onClick={this.createBatch(selectedRows)}
                    >
                      Create Batch
                    </Button>
                  </TableToolbarContent>
                </TableToolbar>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableSelectAll {...getSelectionProps()} /> */}
                      <TableHeader />
                      {headers.map(header => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableSelectRow
                          {...getSelectionProps({ row })}
                          {...(this.props.batching.nonSelectable.includes(
                            row.id
                          )
                            ? { disabled: true }
                            : {})}
                        />
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </React.Fragment>
          )}
        />
      </>
    );
  }
}
