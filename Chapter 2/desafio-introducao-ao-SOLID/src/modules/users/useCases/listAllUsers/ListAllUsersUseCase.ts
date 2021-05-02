import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();

    const user = users.find((user) => user.id === user_id);

    if (!user) {
      throw new Error("User dont exists!");
    }

    if (!user.admin) {
      throw new Error("User not have admin access!");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
