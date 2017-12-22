import { Form } from '../../components/form';
import { Loader } from '../../components/loader';
import { login } from '../../services/userService';

export const Login = props => {
  const loginUser = (data) => {
    login(data)
      .then(data => props.login(data))
      .catch(console.log);
  };

  return (
    props.isLoading ?
      <Loader /> :
      <Form
        exclude={['name', 'surname', 'repeat password']}
        submit={loginUser}
      />
  );
};
