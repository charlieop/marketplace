import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  Button,
  CheckboxField,
  TextField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { getUserAttributes } from "../assets/utils/userSession";
import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <Authenticator
        // Customize `Authenticator.SignUp.FormFields`
        components={{
          SignUp: {
            FormFields() {
              const { validationErrors } = useAuthenticator();
              return (
                <>
                  <TextField
                    placeholder="Enter your Company Name"
                    label="Company Name"
                    errorMessage="This field is required"
                    isRequired={true}
                    name="custom:companyName"
                  />
                  {/* Re-use default `Authenticator.SignUp.FormFields` */}
                  <Authenticator.SignUp.FormFields />

                  {/* Append & require Terms and Conditions field to sign up  */}
                  <CheckboxField
                    errorMessage={validationErrors.acknowledgement as string}
                    hasError={!!validationErrors.acknowledgement}
                    name="acknowledgement"
                    value="yes"
                    label="I agree with the Terms and Conditions"
                    isRequired={true}
                  />
                </>
              );
            },
          },
        }}
        services={{
          async validateCustomSignUp(formData) {
            if (!formData.acknowledgement) {
              return {
                acknowledgement: "You must agree to the Terms and Conditions",
              };
            }
          },
        }}
        formFields={{
          signUp: {
            preferred_username: {
              order: 2,
            },
            email: {
              order: 3,
            },
            password: {
              order: 4,
            },
            family_name: {
              order: 5,
            },
            given_name: {
              order: 6,
            },
            confirm_password: {
              order: 7,
            },
          },
        }}
      >
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <p>Your userID is: {user?.userId}</p>
            <br></br>
            <h2>Attributes</h2>
            <ul>
              {getUserAttributes() &&
                Object.entries(getUserAttributes()).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <h3>{key}: </h3>
                      <p className="detail">{String(value)}</p>
                    </li>
                  );
                })}
            </ul>
            <br></br>
            <div className="button-container">
              <Link to="/">
                <Button variation="primary">Back to Home</Button>
              </Link>
              <Button variation="primary" colorTheme="error" onClick={signOut}>
                Sign out
              </Button>
              <Button
                onClick={() => {
                  console.log(getUserAttributes());
                }}
              >
                Log User
              </Button>
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default Login;
