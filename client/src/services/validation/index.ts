import { ValidationProvider } from './ValidationProvider';
import { useValidation } from './useValidation';

export * from './types';

export const Validation = {
  Provider: ValidationProvider,
  use: useValidation,
};
