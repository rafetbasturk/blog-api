import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/Main';
import { Alert, FormRow } from '../components';

const initialState = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  isMember: true
};

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, generateAlert, loginRegister } = useAppContext()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, confirm, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      generateAlert({ alertType: "danger", alertText: "Please provide all values!" });
      return
    }
    const currentUser = { name, email, password, confirm };

    let endPoint;
    isMember ? endPoint = "login" : endPoint = "register"

    loginRegister(currentUser, endPoint)
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}>
          </FormRow>
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}>
        </FormRow>
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}>
        </FormRow>
        {!values.isMember && (
          <FormRow
            type="password"
            name="confirm"
            value={values.confirm}
            handleChange={handleChange}>
          </FormRow>
        )}
        <button type='submit' className='btn' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='btn-member'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register