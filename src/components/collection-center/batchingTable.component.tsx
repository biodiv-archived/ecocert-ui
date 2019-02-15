import { navigate } from "gatsby";
import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ReactDataGrid from "react-data-grid";

import { IBatching, IBatchingFuncs } from "../../interfaces/batching.interface";

interface IState {
  selectedIndexes;
  selectedIndexesIds;
}

interface IProps extends IBatchingFuncs {
  batching: IBatching;
}

export default class BatchingTableComponent extends Component<IProps, IState> {
  columns = [
    {
      dataField: "collectionId",
      text: "Collection Id"
    },
    {
      dataField: "farmer_userId",
      text: "Farmer User Id"
    },
    {
      dataField: "collectionCenter_ccId",
      text: "Collection Center Id"
    },
    {
      dataField: "quantity",
      text: "Quantity"
    },
    {
      dataField: "moistureContent",
      text: "Moisture Content"
    },
    {
      dataField: "status",
      text: "Status"
    }
  ];

  selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log(row);
      console.log(isSelect);
      console.log(rowIndex);
      console.log(e);
    },
    onSelectAll: (isSelect, rows, e) => {
      console.log(isSelect);
      console.log(rows);
      console.log(e);
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      selectedIndexesIds: []
    };
    this.props.getBatchingData(true);
  }

  rowGetter = i => {
    return this.props.batching.batchingData[i];
  };

  onRowsSelected = rows => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      ),
      selectedIndexesIds: this.state.selectedIndexesIds.concat(
        rows.map(r => r.row.collectionId)
      )
    });
  };

  onRowsDeselected = rows => {
    const rowIndexes = rows.map(r => r.rowIdx);
    const rowIndexesIds = rows.map(r => r.row.collectionId);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      ),
      selectedIndexesIds: this.state.selectedIndexesIds.filter(
        i => rowIndexesIds.indexOf(i) === -1
      )
    });
  };

  createBatch = () => {
    navigate("/collection-center/batch/create", {
      state: this.state
    });
  };

  render() {
    console.log(this.selectRow);
    return (
      <>
        <div className="row mb-3">
          <div className="col-6">
            <h4>Collections</h4>
          </div>
          <div className="col-6 text-right">
            {this.state.selectedIndexes.length} collections(s) selected
            <button
              disabled={this.state.selectedIndexes.length < 1}
              className="btn btn-primary ml-4"
              onClick={this.createBatch}
            >
              Create Batch
            </button>
          </div>
        </div>
        <BootstrapTable
          keyField="collectionId"
          data={this.props.batching.batchingData}
          columns={this.columns}
          selectRow={this.selectRow}
        />
        <ReactDataGrid
          rowKey="collectionId"
          columns={this.columns}
          sortable={true}
          rowGetter={this.rowGetter}
          rowsCount={this.props.batching.batchingData.length}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes
            }
          }}
        />
      </>
    );
  }
}
