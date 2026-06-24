import {
  Alert,
  Anchor,
  Button,
  Container,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { schemaResolver, useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/paths';
import { getApiErrorMessage } from '../../api/get-api-error-message';
import { loginFormSchema, type LoginFormValues } from './auth-form-schemas';
import { useLogin } from './use-login';

export const LoginPage = () => {
  const loginMutation = useLogin();

  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: schemaResolver(loginFormSchema),
  });

  const errorMessage = getApiErrorMessage(loginMutation.error);
  const isSubmitting = loginMutation.isPending;

  const handleSubmit = form.onSubmit((values) => {
    loginMutation.reset();
    loginMutation.mutate(values);
  });

  return (
    <Container size="xs" py="xl">
      <Stack gap="md">
        <Title order={1}>Log in</Title>

        {errorMessage !== null ? (
          <Alert color="red" title="Could not log in">
            {errorMessage}
          </Alert>
        ) : null}

        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Email"
              autoComplete="email"
              {...form.getInputProps('email')}
              disabled={isSubmitting}
            />
            <PasswordInput
              label="Password"
              autoComplete="current-password"
              {...form.getInputProps('password')}
              disabled={isSubmitting}
            />
            <Button type="submit" loading={isSubmitting}>
              Log in
            </Button>
          </Stack>
        </form>

        <Text size="sm">
          No account?{' '}
          <Anchor component={Link} to={ROUTES.register}>
            Sign up
          </Anchor>
        </Text>
      </Stack>
    </Container>
  );
};
