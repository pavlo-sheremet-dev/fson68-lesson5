export const getEnvVars = () => {
  const isDev = import.meta.env.DEV;

  return {
    testKey: isDev
      ? import.meta.env.VITE_TEST_KEY_DEV
      : import.meta.env.VITE_TEST_KEY_PROD,

    apiKey: import.meta.env.VITE_F_API_KEY,
    authDomain: import.meta.env.VITE_F_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_F_PROJECT_ID,
    storageBucket: import.meta.env.VITE_F_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_F_MESS_SENDER_ID,
    appId: import.meta.env.VITE_F_APP_ID,
  };
};
