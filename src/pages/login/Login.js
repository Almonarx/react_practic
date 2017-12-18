import { Form } from '../../components/form';

export const Login = (props) => (
  <Form
    exclude={['name', 'surname', 'repeat password']}
    submit={props.login}
  />
);
