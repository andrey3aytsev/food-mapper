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
import {
  registerFormSchema,
  type RegisterFormValues,
} from './auth-form-schemas';
import { useRegister } from './use-register';

export const RegisterPage = () => {
  const registerMutation = useRegister();

  const form = useForm<RegisterFormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: schemaResolver(registerFormSchema),
  });

  const errorMessage = getApiErrorMessage(registerMutation.error);
  const isSubmitting = registerMutation.isPending;

  const handleSubmit = form.onSubmit((values) => {
    const { email, password } = registerFormSchema.parse(values);
    registerMutation.reset();
    registerMutation.mutate({ email, password });
  });

  return (
    <Container size="xs" py="xl">
      <Stack gap="md">
        <Title order={1}>Sign up</Title>

        {errorMessage !== null ? (
          <Alert color="red" title="Could not sign up">
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
              autoComplete="new-password"
              {...form.getInputProps('password')}
              disabled={isSubmitting}
            />
            <PasswordInput
              label="Confirm password"
              autoComplete="new-password"
              {...form.getInputProps('confirmPassword')}
              disabled={isSubmitting}
            />
            <Button type="submit" loading={isSubmitting}>
              Sign up
            </Button>
          </Stack>
        </form>

        <Text size="sm">
          Already have an account?{' '}
          <Anchor component={Link} to={ROUTES.login}>
            Log in
          </Anchor>
        </Text>
      </Stack>
    </Container>
  );
};
