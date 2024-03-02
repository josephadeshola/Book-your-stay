import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/forgotpsw.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSendCode = () => {
    setVerificationSent(true);
  };

  const handleResetPassword = () => {
    console.log("Password reset successful");
  };

  return (
    <div>
      <div className="top-forget"></div>
      <Container id="form-forget" className="shadow col-md-5 col-11">
        <Row className="justify-content-center mx-auto ">
          <i class="bi bi-exclamation-circle text-center getWidth"></i>
          <h2 className="text-center ">Forgot Password</h2>
          <p className="text-center fs-6">
            Enter your email we'll send you a link to reset your password
          </p>
          <Col md={12}>
            {verificationSent ? (
              <Form>
                <Form.Group controlId="code">
                  <Form.Label>Verification Code</Form.Label>
                  <Form.Control
                    className="py-3"
                    type="text"
                    placeholder="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    className="py-3"
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    className="py-3"
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  className="border bg-success border-none w-100 mb-3 py-3 mt-3 float-end"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>
              </Form>
            ) : (
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    className="py-3"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Button
                  className="border bg-success border-none w-100 mb-3 py-3 mt-3 float-end"
                  onClick={handleSendCode}
                >
                  Send Verification Code
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
