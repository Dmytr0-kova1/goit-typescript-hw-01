type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T): T {
  console.log(initialValues);
  return initialValues;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
