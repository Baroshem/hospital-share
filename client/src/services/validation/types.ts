import { ObjectSchema, Shape } from 'yup';

export type Schema<T extends object> = ObjectSchema<Shape<object, T>>;
