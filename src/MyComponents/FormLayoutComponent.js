import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormLayoutComponent() {
  return (
    <>
    <h3 style={{ textAlign: 'center', color: 'lightcyan'}}>
        Haven't Joined Yet Consider Joining us
    </h3>
    <Form style={{color:'lightcyan', padding :'0px 30px 20px'}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Your Permanent Address" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Occupation</Form.Label>
          <Form.Control placeholder= 'Occupation' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pincode</Form.Label>
          <Form.Control placeholder= 'Pincode' />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default FormLayoutComponent;