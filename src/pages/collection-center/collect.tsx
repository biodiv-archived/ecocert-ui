import { Button } from "carbon-components-react";
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

  collectForm = FormBuilder.group({
    membershipId: ["", Validators.required],
    ccCode: ["", Validators.required],
    quantity: ["", Validators.required],
    moistureContent: ["", Validators.required],
    date: ["", Validators.required],
    status: [this.statusOptions[0].value, Validators.required],
    timestamp: [new Date(), Validators.required]
  });

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
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
              <h1 className="eco--title">Collect</h1>
              <form className="bx--form" onSubmit={this.handleSubmit}>
                <div className="bx--row">
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="membershipId"
                      render={textInput}
                      meta={{ label: "Membership Id" }}
                    />
                  </div>
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="ccCode"
                      render={numberInput}
                      meta={{ label: "CC Code" }}
                    />
                  </div>
                </div>
                <div className="bx--row">
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="quantity"
                      render={numberInput}
                      meta={{ label: "Quantity" }}
                    />
                  </div>
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="moistureContent"
                      render={numberInput}
                      meta={{ label: "Moisture Content" }}
                    />
                  </div>
                </div>
                <div className="bx--row">
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="date"
                      render={dateInput}
                      meta={{ label: "Date" }}
                    />
                  </div>
                  <div className="bx--col-md-6 bx--col-xs-12">
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
                <Button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={invalid}
                >
                  Submit
                </Button>
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
