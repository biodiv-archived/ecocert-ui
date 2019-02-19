import React, { PureComponent } from "react";
import {
  FieldControl,
  FieldGroup,
  FormBuilder,
  Validators
} from "react-reactive-form";
import { connect } from "react-redux";

import Layout from ".@components/core/layout.component";
import {
  dateInput,
  numberInput,
  selectInput,
  textInput
} from ".@components/formInput.component";
import { ICollectFuncs } from ".@interfaces/collect.interface";
import actions from ".@modules/actions";

interface IProps extends ICollectFuncs {}

class CollectPage extends PureComponent<IProps> {
  statusOptions = [
    { name: "Collected", value: "COLLECTED" },
    { name: "Not Collected", value: "NOT_COLLECTED" }
  ];

  collectForm;

  constructor(props) {
    super(props);
    this.collectForm = FormBuilder.group({
      membershipId: ["", Validators.required],
      ccCode: ["", Validators.required],
      quantity: ["", Validators.required],
      moistureContent: ["", Validators.required],
      date: [this.getToday(), Validators.required],
      status: [this.statusOptions[0].value, Validators.required],
      timestamp: [new Date(), Validators.required]
    });
  }

  getToday() {
    const local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
    return local.toJSON().slice(0, 10);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.info("Form values", this.collectForm.value);
    this.props.collect(this.collectForm.value);
  };

  render() {
    return (
      <Layout {...this.props}>
        <FieldGroup
          control={this.collectForm}
          render={({ get, invalid }) => (
            <>
              <h4 className="mb-3">Collect</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="membershipId"
                      render={textInput}
                      meta={{ label: "Membership Id" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="ccCode"
                      render={numberInput}
                      meta={{ label: "CC Code" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="quantity"
                      render={numberInput}
                      meta={{ label: "Quantity" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="moistureContent"
                      render={numberInput}
                      meta={{ label: "Moisture Content" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="date"
                      render={dateInput}
                      meta={{ label: "Date" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <FieldControl
                      name="status"
                      render={selectInput}
                      meta={{
                        label: "Status",
                        options: this.statusOptions
                      }}
                    />
                  </div>
                </div>
                <hr className="mb4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={invalid}
                >
                  Submit
                </button>
              </form>
            </>
          )}
        />
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(CollectPage);
