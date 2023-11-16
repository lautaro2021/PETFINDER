import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  authorizationParams: {
    custom_param: 'custom'
  },
  returnTo: '/pet-profile/edit?pet=1'
});