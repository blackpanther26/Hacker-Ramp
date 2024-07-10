import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={"14"}
        type="email"
        value={inputs.email}
        size={"sm"}
        borderColor="gray.600"
        _placeholder={{ color: "gray.600" }}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={"14"}
        type="password"
        value={inputs.password}
        size={"sm"}
        borderColor="gray.600"
        _placeholder={{ color: "gray.600" }}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
