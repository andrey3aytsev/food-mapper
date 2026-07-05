import { Alert, Container, Loader, Stack, Text, Title } from '@mantine/core';

import { getApiErrorMessage } from '../../api/get-api-error-message';
import { useMe } from '../auth/use-me';

export const ProfilePage = () => {
  const meQuery = useMe();
  const errorMessage = getApiErrorMessage(meQuery.error);

  return (
    <Container size="xs" py="xl">
      <Stack gap="md">
        <Title order={1}>Profile</Title>

        {meQuery.isLoading ? <Loader size="sm" /> : null}

        {errorMessage !== null ? (
          <Alert color="red" title="Could not load profile">
            {errorMessage}
          </Alert>
        ) : null}

        {meQuery.data !== undefined ? (
          <Text>
            Signed in as <strong>{meQuery.data.email}</strong>
          </Text>
        ) : null}
      </Stack>
    </Container>
  );
};
