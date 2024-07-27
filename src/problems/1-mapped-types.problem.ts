import { Equal, Expect } from '../helpers/type-utils';

type NewUser = {
  id?: number | null | undefined;
	name?: string | null | undefined;
	email?: string | null | undefined;
}

type Generic<T> = T extends User ? NewUser : Omit<NewUser, "email">;

interface User {
	id: number;
	name: string;
	email: string;
}

const user1: Generic<User> = {
	id: null,
	name: 'John Doe',
};

const user2: Generic<Pick<User, 'id' | 'name'>> = {
	id: 1,
  name: 'hello world'
};

type tests = [
	Expect<
		Equal<
			typeof user1,
			{
				id?: number | null | undefined;
				name?: string | null | undefined;
				email?: string | null | undefined;
			}
		>
	>,
	Expect<
		Equal<
			typeof user2,
			{
				id?: number | null | undefined;
				name?: string | null | undefined;
			}
		>
	>
];
