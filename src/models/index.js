// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note2 } = initSchema(schema);

export {
  Note2
};