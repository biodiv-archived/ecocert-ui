import { navigate } from "gatsby";
import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { TABLE_HEADER_FIELDS } from "./createBatchingTable.constants";
import { IBatching, IBatchingFuncs } from ".@interfaces/batching.interface";

interface IState {
  sCollections;
}

interface IProps extends IBatchingFuncs {
  batching: IBatching;
}

export default class CreateBatchingTableComponent extends Component<IProps, IState> {
  selectRow;

  constructor(props) {
    super(props);
    this.state = {
      sCollections: []
    };
    this.selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        this.onSelectedRowsUpdated([row], isSelect);
      },
      onSelectAll: (isSelect, rows, e) => {
        this.onSelectedRowsUpdated(rows, isSelect);
      },
      nonSelectable: this.props.batching.nonSelectable
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.props.getCollectionData(true);
  };

  onSelectedRowsUpdated = (rows, isAdded) => {
    rows.forEach(r => {
      this.setState(s => ({
        sCollections: isAdded
          ? [...s.sCollections, r.collectionId]
          : s.sCollections.filter(i => i !== r.collectionId)
      }));
    });
  };

  createBatch = () => {
    navigate("/collection-center/batch/create", {
      state: this.state
    });
  };

  render() {
    return (
      <>
        <div className="row mb-3">
          <div className="col-6">
            <h4>Collections</h4>
          </div>
          <div className="col-6 text-right">
            {this.state.sCollections.length} collections(s) selected
            <button
              disabled={this.state.sCollections.length < 1}
              className="btn btn-primary ml-4"
              onClick={this.createBatch}
            >
              Create Batch
            </button>
          </div>
        </div>
        <BootstrapTable
          keyField="collectionId"
          data={this.props.batching.collectionData || []}
          columns={TABLE_HEADER_FIELDS}
          selectRow={this.selectRow}
        />
      </>
    );
  }
}
