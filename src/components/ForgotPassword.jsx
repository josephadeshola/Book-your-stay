import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/forgotpsw.css";
import axios from "axios";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SpinnerCircular } from "spinners-react";

const ForgotPassword = () => {
  const [isloading, setIsloading] = useState(true);
  const [code, setCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsloading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter your registered Email")
        .email("Invalid Email format"),
    }),
    onSubmit: (values) => {
      handleSendCode(values.email);
    },
  });

  const handleSendCode = (email) => {
    axios
      .post(baseUrl + "/user/forgot", { email })
      .then((res) => {
        if (res.data.status === true) {
          setVerificationSent(true);
          setCode(res.data);
          toast.success("Verification Code Sent Successfully!");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log("error ocur", err);
        toast.error("Error sending verification code");
      });
  };

  return (
    <div>
      <div className="top-forget"></div>
      {isloading ? (
        <div className=" mx-auto text-center text-center ">
          <SpinnerCircular
            speed={137}
            thickness={175}
            height={"300px"}
            width={"300px"}
            left={"30px"}
            color="rgba(172, 166, 57, 1)"
            secondaryColor="rgba(172, 150, 57, 0.44)"
            className="ml-30 text-center"
          />
        </div>
      ) : (
        <Container id="form-forget" className="shadow col-md-5 col-11">
          <Row className="justify-content-center mx-auto ">
            <i class="bi bi-exclamation-circle text-center getWidth"></i>
            <h2 className="text-center ">Forgot Password</h2>
            <p className="text-center fs-6">
              Enter your email we'll send you a link to reset your password
            </p>
            <Col md={12}>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    className="py-3"
                    type="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error text-danger text-center">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </Form.Group>
                <Button
                  className="border bg-success border-none w-100 mb-3 py-3 mt-3 float-end"
                  type="submit"
                >
                  Send Verification Code
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ForgotPassword;
