import AppConfig from '@main/config/appConfig';
import { Service } from 'typedi';
import IocConstants from '@main/common/ioc/constants';
import AuthenticationProviderInterface from './authenticationProviderInterface';

@Service(IocConstants.AuthenticationProvider)
export default class Auth0Provider implements AuthenticationProviderInterface {
  // eslint-disable-next-line class-methods-use-this
  public async isTokenValid(token: string): Promise<boolean> {
    if (token === AppConfig.authToken) return true;
    return false;
  }
}
