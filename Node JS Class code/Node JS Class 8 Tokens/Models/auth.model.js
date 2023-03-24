import bcrypt from "bcryptjs";
import DataService from "../Services/data.service.js";
import { v4 as uuidv4 } from "uuid";
import { createAccesToken, createRefreshToken } from "../jwt.const.js";
import { verifyRefreshToken } from "../jwt.const.js";

export default class AuthModel {
  async registerUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = {
      id: uuidv4(),
      username: userData.username,
      password: hashedPassword,
    };

    await DataService.saveFile("./data/users.json", [user]);

    const { password, ...everythingElse } = user;

    return everythingElse;
  }

  async loginUser(userData) {
    const users = await DataService.readFile("./data/users.json");

    const user = users.find((user) => user.username === userData.username);

    if (!user) throw new Error("User not found!");

    const isSamePassword = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (isSamePassword) {
      const token = createAccesToken(user.id);

      const refreshToken = createRefreshToken(user.id);
      user.refreshTokens.push(refreshToken);

      const index = users.findIndex((u) => u.id === user.id);
      users[index] = user;

      DataService.saveFile("../data/users.json", users);

      const { password, ...whatIsLeftOfUser } = user;
      return { user: whatIsLeftOfUser, token, refreshToken };
    } else {
      throw new Error("Invalid credentials!");
    }
  }
  refreshToken(token) {
    const { userId } = verifyRefreshToken(token);

    if (!userId) throw new Error("User doent exist");

    const accessToken = createAccesToken(userId);
    const refreshToken = createRefreshToken(userId);

    return { accessToken, refreshToken };
  }
}
