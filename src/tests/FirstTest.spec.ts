import { User } from "../models/user";

test("it should be ok", () => {
  const user = new User();

  user.name = "Nikolas";

  expect(user.name).toEqual("Nikolas");
});
