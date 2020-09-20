import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  props.setNavBarHidden(true)

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {/* Conditional Statement, if NOT isSubmitted, show FormSignup. if isSubmitted, show Success */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;