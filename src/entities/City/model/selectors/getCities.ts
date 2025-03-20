import { StateSchema } from 'app/providers/StoreProvider';

export const getCities = (state: StateSchema) => state?.city.cities || [];
