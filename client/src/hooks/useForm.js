import { useState } from "react";

export default initialValue => {
  const [values, setvalues] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  return [values, handleChange];
};
