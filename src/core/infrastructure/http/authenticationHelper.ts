import { Action } from 'routing-controllers';
import { AuthenticationProviderInterface } from '@main/authenticationProviders';
import Container from 'typedi';
import IocConstants from '@main/common/ioc/constants';

export default async function authenticationHelper(action: Action) {
  const authorizationHeader: string =
    action.request.headers.authorization || action.request.headers.Authorization;
  if (!authorizationHeader) return false;
  const authorizationToken = authorizationHeader
    .replace('Bearer', '')
    .replace('bearer', '')
    .trim();
  const auth0Provider: AuthenticationProviderInterface = Container.get(
    IocConstants.AuthenticationProvider,
  );

  return auth0Provider.isTokenValid(authorizationToken);
}
