import { Button } from "carbon-components-react";
import React, { PureComponent } from "react";
import { FieldControl, FieldGroup, FormBuilder, Validators } from "react-reactive-form";
import { connect } from "react-redux";

import Layout from ".@components/core/layout.component";
import { dateInput, passwordInput, selectInput, textInput } from ".@components/formInput.component";
import { IFarmerFuncs } from ".@interfaces/farmer.interface";
import actions from ".@modules/actions";

interface IProps extends IFarmerFuncs {}

class CollectionCenterFarmerAddPage extends PureComponent<IProps> {
  moistureCalculationTypeOptions = [
    { name: "Average", value: "AVERAGE" },
    { name: "Sum", value: "SUM" },
    { name: "Min", value: "MIN" },
    { name: "Max", value: "MAX" },
    { name: "Count", value: "COUNT" },
    { name: "Manual", value: "MANUAL" }
  ];

  genderOptions = [
    { name: "Male", value: "MALE" },
    { name: "Female", value: "FEMALE" }
  ];

  showMoistureContent = false;

  farmerAddForm;

  constructor(props) {
    super(props);
    this.farmerAddForm = FormBuilder.group({
      membershipId: ["", Validators.required],
      userName: ["", Validators.required],
      password: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      gender: ["", Validators.required],
      cellNumber: ["", Validators.required],
      email: ["", [Validators.email]],
      village: ["", Validators.required],
      subCountry: ["", Validators.required],
      farmCode: ["", Validators.required],
      farmNumber: ["", Validators.required],
      areaUnderCoffee: ["", Validators.required],
      totalArea: ["", Validators.required],
      numOfPlots: ["", Validators.required],
      numOfCoffeeTrees: ["", Validators.required],
      latitude: ["", Validators.required],
      langitude: ["", Validators.required],
      ccCode: ["", Validators.required]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.info("Form values", this.farmerAddForm.value);
    this.props.addFarmer(this.farmerAddForm.value);
  };

  render() {
    return (
      <Layout {...this.props}>
        <FieldGroup
          control={this.farmerAddForm}
          render={({ get, invalid }) => (
            <>
              <h1 className="eco--title">Add Farmer</h1>
              <form className="bx--form" onSubmit={this.handleSubmit}>
                <div className="bx--row">
                  <div className="bx--col-md-12">
                    <FieldControl
                      name="membershipId"
                      render={textInput}
                      meta={{ label: "Membership Id" }}
                    />
                  </div>
                </div>
                <h3 className="eco--form-title">Login details</h3>
                <div className="bx--row">
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="userName"
                      render={textInput}
                      meta={{ label: "User name" }}
                    />
                  </div>
                  <div className="bx--col-md-6 bx--col-xs-12">
                    <FieldControl
                      name="password"
                      render={passwordInput}
                      meta={{ label: "Password" }}
                    />
                  </div>
                </div>
                <h3 className="eco--form-title">Personal details</h3>
                <div className="bx--row">
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="dateOfBirth"
                      render={dateInput}
                      meta={{ label: "Date of birth" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="gender"
                      render={selectInput}
                      meta={{
                        label: "Gender",
                        options: this.genderOptions
                      }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="cellNumber"
                      render={textInput}
                      meta={{ label: "Cell number" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="email"
                      render={textInput}
                      meta={{ label: "Email" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="village"
                      render={textInput}
                      meta={{ label: "Village" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="subCountry"
                      render={textInput}
                      meta={{ label: "Sub country" }}
                    />
                  </div>
                </div>
                <h3 className="eco--form-title">Farm details</h3>
                <div className="bx--row">
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="farmCode"
                      render={textInput}
                      meta={{ label: "Farm code" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="farmNumber"
                      render={textInput}
                      meta={{ label: "Farm number" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="areaUnderCoffee"
                      render={textInput}
                      meta={{ label: "Area under coffee" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="totalArea"
                      render={textInput}
                      meta={{ label: "Total Area" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="numOfPlots"
                      render={textInput}
                      meta={{ label: "Number of plots" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="numOfCoffeeTrees"
                      render={textInput}
                      meta={{ label: "Number of coffee trees" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="latitude"
                      render={textInput}
                      meta={{ label: "Latitude" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="langitude"
                      render={textInput}
                      meta={{ label: "Langitude" }}
                    />
                  </div>
                  <div className="bx--col-md-4 bx--col-xs-12">
                    <FieldControl
                      name="ccCode"
                      render={textInput}
                      meta={{ label: "Collection center (cc code)" }}
                    />
                  </div>
                </div>
                <Button type="submit" disabled={invalid}>
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
)(CollectionCenterFarmerAddPage);
