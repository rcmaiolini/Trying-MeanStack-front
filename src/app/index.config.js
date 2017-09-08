export function config ($authProvider, API_URL) {
  'ngInject';

  $authProvider.signupUrl = API_URL + 'auth/register';
  $authProvider.loginUrl = API_URL + 'auth/login';
}
