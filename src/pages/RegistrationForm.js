import React, { useState } from 'react';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';

const RegistrationForm = (props) => {
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
          <Register submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};

export default RegistrationForm;