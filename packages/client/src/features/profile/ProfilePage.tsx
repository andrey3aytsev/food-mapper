import {
  Alert,
  Button,
  Container,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { getApiErrorMessage } from '../../api/get-api-error-message';
import { useLogout } from '../auth/use-logout';
import { useMe } from '../auth/use-me';

export const ProfilePage = () => {
  const meQuery = useMe();
  const logoutMutation = useLogout();
  const errorMessage = getApiErrorMessage(meQuery.error);

  return (
    <Container size="xs" py="xl">
      <Stack gap="md">
        <Title order={1}>Profile</Title>

        {meQuery.isLoading ? (
          <Stack gap="xs">
            <Skeleton height={20} radius="sm" width="80%" />
            <Skeleton height={20} radius="sm" width="60%" />
            <Skeleton height={20} radius="sm" width="80%" />
          </Stack>
        ) : null}

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

        <Button
          color="red"
          loading={logoutMutation.isPending}
          onClick={() => logoutMutation.mutate()}
          variant="light"
        >
          Log out
        </Button>
      </Stack>
    </Container>
  );
};
