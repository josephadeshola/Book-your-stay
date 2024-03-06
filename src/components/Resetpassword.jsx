import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/forgotpsw.css";
import axios from "axios";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Resetpassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParasm = new URLSearchParams(location.search);
  const token = queryParasm.get("token");
  const [expiryTime, setExpiryTime] = useState(300)
  const [expired, setExpired] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setExpiryTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setExpired(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formik = useFormik({
    initialValues: {
      token: token,
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      token: Yup.string(),
      newPassword: Yup.string()
        .required("Please enter your new password")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      axios
        .post(baseUrl + `/reset`, values)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            toast.success("Password reset successful");
            navigate("/login");
          } else {
            toast.error("An error occurred. Please try again.");
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again.");
        });
    },
  });

  return (
    <div>
      <div className="top-forget"></div>
      <Container id="form-forget" className="shadow py-5 col-md-5 col-11">
        <Row className="justify-content-center mx-auto ">
          <i class="bi bi-exclamation-circle text-center getWidth"></i>
          <h2 className="text-center ">Reset Password</h2>
          <Col md={12}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  className="py-3"
                  type="password"
                  placeholder="Enter new password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? (
                  <div className="error text-danger">
                    {formik.errors.newPassword}
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="py-3"
                  type="password"
                  placeholder="Confirm new password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="error text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </Form.Group>
              <Button
                className="border bg-success border-none w-100 mb-3 py-3 mt-3 float-end"
                type="submit"
              > Reset Password
              </Button>
              <small>Reset password link expire  in {expiryTime} minutes time.</small>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resetpassword;
