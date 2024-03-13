import { OrganizationService } from '@/service/organization.service';
import { UserService } from '@/service/users.service';
import { isResultError } from '@/utils/Result';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('/users')
export class UsersController {
  constructor(
    private usersService: UserService,
    private organizationService: OrganizationService,
  ) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { roleId = 1, userName, orgId } = createUserDto;
    const maybeOrg = await this.organizationService.getOrganizationById(orgId);
    if (isResultError(maybeOrg)) throw maybeOrg.value;

    const maybeUser = await this.usersService.createUser({
      name: userName,
      org_id: maybeOrg.value.id,
      user_role_id: roleId,
    });

    if (isResultError(maybeUser)) throw maybeUser.value;
    return maybeUser.value;
  }
}
