import React, { useState } from "react";
import {
  Button,
  Grid,
  Header,
  Segment,
  Message,
  Input,
  Image,
  Icon,
  Container,
  Label,
} from "semantic-ui-react";
import { Formik } from "formik";
import axios from "axios";

const style = {
  h1: {
    // marginTop: "3em",
  },
  flex: {
    flex: 1,
    flexDirection: "row",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
  filled: {
    width: "100%",
  },
};

const PredictionResponse = ({ message, positive }) => {
  return (
    <Message size="huge" positive={positive} negative={!positive}>
      <Message.Header>{message}</Message.Header>
    </Message>
  );
};

const App = () => {
  const [response, setResponse] = useState({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <React.Fragment>
      <Segment>
        <Container>
          <Image
            src="/cam_neuro.png"
            size="small"
            floated="left"
            href="https://www.neurosurg.cam.ac.uk/research-groups/brain-tumour-imaging-lab/"
            target="_blank"
          />
          <Header
            as="h1"
            content="GBM Patient Survival Predictor"
            style={style.h1}
          />
          <Button as="div" labelPosition="right">
            <Button icon href="https://github.com/AliLawrence/ML_GBMSurvival">
              <Icon name="github" />
            </Button>
            <Label
              as="a"
              basic
              href="https://github.com/AliLawrence/ML_GBMSurvival"
            >
              Source Code
            </Label>
          </Button>
        </Container>
      </Segment>
      <Formik
        initialValues={{
          diagnosis_age: "",
          sex: "male",
          treatment: "gross_total_resection",
          idh_status: "0",
          mgmt_status: "0",
          chemo: "0",
          tumor_side: "left",
          tumor_location: "corpus_callosum",
          radiotherapy: "0",
          sx_main: "deficit",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.diagnosis_age) {
            errors.diagnosis_age = "Required";
          } else if (!/^[0-9]+$/i.test(values.diagnosis_age)) {
            errors.diagnosis_age = "Age not a number";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const obj = {
            Sex: values.sex === "female" ? 1 : 0,
            Age: parseInt(values.diagnosis_age) < 69 ? 1 : 0,
            Biopsy: values.treatment === "biopsy" ? 1 : 0,
            IcRET: values.treatment === "subtotal_resection" ? 1 : 0,
            CRET: values.treatment === "gross_total_resection" ? 1 : 0,
            Tside: values.tumor_side === "left" ? 0 : 1, // check
            IDHStatus: values.idh_status === "1" ? 1 : 0,
            MGMT: values.mgmt_status === "1" ? 1 : 0,
            SxDeficit: values.sx_main === "deficit" ? 1 : 0,
            SxHeadache: values.sx_main === "headache" ? 1 : 0,
            SxSeizure: values.sx_main === "seizure" ? 1 : 0,
            ZeroGy: values.radiotherapy === "0" ? 1 : 0,
            ThirtyGy: values.radiotherapy === "30" ? 1 : 0,
            FortyGy: values.radiotherapy === "40" ? 1 : 0,
            SixtyGy: values.radiotherapy === "60" ? 1 : 0,
            TMZ: values.chemo === "1" ? 1 : 0,
          };

          axios
            .post("/predict", obj)
            .then(({ data }) => {
              setResponse(data);
            })
            .catch((err) => alert(JSON.stringify(err)))
            .finally(() => {
              setSubmitting(false);
              setSubmitted(true);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columns={2} stackable>
              <Grid.Column>
                <Segment>
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="sex"
                      value="male"
                      active={values.sex === "male"}
                    >
                      Male
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="sex"
                      value="female"
                      active={values.sex === "female"}
                    >
                      Female
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Input
                    style={style.filled}
                    name="diagnosis_age"
                    value={values.diagnosis_age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.diagnosis_age && touched.diagnosis_age}
                    label={{ basic: true, content: "years old" }}
                    labelPosition="right"
                    placeholder="Enter age at diagnosis..."
                  />
                  <br />
                  {errors.diagnosis_age &&
                    touched.diagnosis_age &&
                    errors.diagnosis_age}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="Main symptom on presentation"
                    textAlign="center"
                  />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="sx_main"
                      value="deficit"
                      active={values.sx_main === "deficit"}
                    >
                      Neurological deficit
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="sx_main"
                      value="headache"
                      active={values.sx_main === "headache"}
                    >
                      Headache
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="sx_main"
                      value="seizure"
                      active={values.sx_main === "seizure"}
                    >
                      Seizure
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="Tumor hemisphere"
                    textAlign="center"
                  />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_side"
                      value="left"
                      active={values.tumor_side === "left"}
                    >
                      Left
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_side"
                      value="right"
                      active={values.tumor_side === "right"}
                    >
                      Right
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_side"
                      value="both"
                      active={values.tumor_side === "both"}
                    >
                      Both
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="Surgical management"
                    textAlign="center"
                  />
                  <Button.Group vertical style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="treatment"
                      value="gross_total_resection"
                      active={values.treatment === "gross_total_resection"}
                    >
                      Complete Resection of Enhancing Tumor (CRET)
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="treatment"
                      value="subtotal_resection"
                      active={values.treatment === "subtotal_resection"}
                    >
                      Incomplete Resection of Enhancing Tumor (IcRET)
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="treatment"
                      value="biopsy"
                      active={values.treatment === "biopsy"}
                    >
                      Biopsy
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              {/* <Grid.Column>
                <Segment>
                  <Header as="h3" content="Tumor location" textAlign="center" />
                  <Button.Group vertical style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="corpus_callosum"
                      active={values.tumor_location === "corpus_callosum"}
                    >
                      Corpus Callosum
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="exterenal_capsule"
                      active={values.tumor_location === "exterenal_capsule"}
                    >
                      External Capsule
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="frontal_lobe"
                      active={values.tumor_location === "frontal_lobe"}
                    >
                      Frontal Lobe
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="parietal_lobe"
                      active={values.tumor_location === "parietal_lobe"}
                    >
                      Parietal Lobe
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="temporal_lobe"
                      active={values.tumor_location === "temporal_lobe"}
                    >
                      Temporal Lobe
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="occipital_lobe"
                      active={values.tumor_location === "occipital_lobe"}
                    >
                      Occipital Lobe
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="thalamus"
                      active={values.tumor_location === "thalamus"}
                    >
                      Thalamus
                    </Button>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="tumor_location"
                      value="cerebellum"
                      active={values.tumor_location === "cerebellum"}
                    >
                      Cerebellum
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column> */}
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="MGMT status >10%"
                    textAlign="center"
                  />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="mgmt_status"
                      value="0"
                      active={values.mgmt_status === "0"}
                    >
                      Negative
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="mgmt_status"
                      value="1"
                      active={values.mgmt_status === "1"}
                    >
                      Positive
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="Radiotherapy treatment"
                    textAlign="center"
                  />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="radiotherapy"
                      value="0"
                      active={values.radiotherapy === "0"}
                    >
                      None given
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="radiotherapy"
                      value="30"
                      active={values.radiotherapy === "30"}
                    >
                      30gy
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="radiotherapy"
                      value="40"
                      active={values.radiotherapy === "40"}
                    >
                      40gy
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="radiotherapy"
                      value="60"
                      active={values.radiotherapy === "60"}
                    >
                      60gy
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header as="h3" content="IDH status" textAlign="center" />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="idh_status"
                      value="0"
                      active={values.idh_status === "0"}
                    >
                      Negative
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="idh_status"
                      value="1"
                      active={values.idh_status === "1"}
                    >
                      Positive
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header
                    as="h3"
                    content="TMZ Chemotherapy"
                    textAlign="center"
                  />
                  <Button.Group style={style.filled}>
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="chemo"
                      value="0"
                      active={values.chemo === "0"}
                    >
                      Not given
                    </Button>
                    <Button.Or />
                    <Button
                      type="button"
                      onClick={handleChange}
                      name="chemo"
                      value="1"
                      active={values.chemo === "1"}
                    >
                      Given
                    </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
            </Grid>
            <Segment>
              <Button
                fluid
                primary
                disabled={
                  Object.keys(errors).length > 0 || values.diagnosis_age === ""
                }
                loading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Segment>
            <br />
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
      {submitted && (
        <PredictionResponse
          message={response.message}
          positive={response.positive}
        />
      )}
      <br />
      <br />
    </React.Fragment>
  );
};

export default App;
