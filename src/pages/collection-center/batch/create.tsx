import { Button } from "carbon-components-react";
import React, { PureComponent } from "react";
import { If } from "react-control-statements";
import { FieldControl, FieldGroup, FormBuilder, Validators } from "react-reactive-form";
import { connect } from "react-redux";

import Layout from ".@components/core/layout.component";
import SEO from ".@components/core/seo.component";
import { numberInput, selectInput } from ".@components/formInput.component";
import { IBatchingFuncs } from ".@interfaces/batching.interface";
import actions from ".@modules/actions";

interface IProps extends IBatchingFuncs {}

class CollectionCenterBatchCreatePage extends PureComponent<IProps> {
  moistureCalculationTypeOptions = [
    { name: "Average", value: "AVERAGE" },
    { name: "Sum", value: "SUM" },
    { name: "Min", value: "MIN" },
    { name: "Max", value: "MAX" },
    { name: "Count", value: "COUNT" },
    { name: "Manual", value: "MANUAL" }
  ];

  showMoistureContent = false;

  collectForm = FormBuilder.group({
    collectionIds: [window.history.state.sCollections, Validators.required],
    moistureContentCalculationType: [
      this.moistureCalculationTypeOptions[0].value,
      Validators.required
    ],
    factoryId: ["", Validators.required],
    moistureContent: [0, Validators.min(0)]
  });

  handleSubmit = e => {
    e.preventDefault();
    console.info("Form values", this.collectForm.value);
    this.props.createBatchfromCollections(this.collectForm.value);
  };

  render() {
    this.collectForm
      .get("moistureContentCalculationType")
      .valueChanges.subscribe(value => {
        this.showMoistureContent = value === "MANUAL";
      });
    return (
      <Layout {...this.props}>
        <SEO title="Create Batch" />
        <FieldGroup
          control={this.collectForm}
          render={({ get, invalid }) => (
            <>
              <h1 className="eco--title">Create batch from Collections</h1>
              <form className="bx--form" onSubmit={this.handleSubmit}>
                <div className="bx--row">
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="factoryId"
                      render={numberInput}
                      meta={{ label: "Factory Id" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="moistureContentCalculationType"
                      render={selectInput}
                      meta={{
                        label: "Moisture Content Calculation Type",
                        options: this.moistureCalculationTypeOptions
                      }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <If condition={this.showMoistureContent}>
                      <FieldControl
                        name="moistureContent"
                        render={numberInput}
                        meta={{ label: "Moisture Content" }}
                      />
                    </If>
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
)(CollectionCenterBatchCreatePage);
