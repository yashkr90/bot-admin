import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { setApi } from "../api/api";

const ApiInput = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    console.log(apiKey);
    if (user) {
      console.log(apiKey);
      // @ts-ignore
      await setApi({ api: apiKey, email: user.email });
    } else {
      console.error("User or email is undefined");
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const apikey = e.target.value;
    setApiKey(apikey);
  };

  return (
    <InputGroup size="lg">
      <InputGroup.Text id="inputGroup-sizing-lg">API KEY</InputGroup.Text>

      <Form.Control
        aria-label="Large"
        onChange={handleInputChange}
        value={apiKey}
      />
      <Button
        onClick={handleSubmit}
        variant="outline-secondary"
        type="submit"
        id="button-addon2"
      >
        Save
      </Button>
    </InputGroup>
  );
};

export default ApiInput;
