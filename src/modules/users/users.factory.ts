import { User } from './interfaces/user';
import { adminUserService } from '../users/admin.users.service';
import { customerUserService } from '../users/customer.user.service';
import { Role } from '../../enums/role';
import { IUserService } from './interfaces/user.service.interface';

class UsersFactory {
  chooseUserService(user: User): IUserService {
    switch (user?.role) {
      case Role.ADMIN:
        return adminUserService;
      case Role.CUSTOMER:
        return customerUserService;
      case undefined:
        return customerUserService;
      default:
        throw new Error('No such role');
    }
  }
}

const usersFactory = new UsersFactory();
export { usersFactory };
