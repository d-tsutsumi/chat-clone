import { Organization } from '@/entities';
import { Failure, Success } from '@/utils/Result';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  async getOrganizationById(org_id: string) {
    const organization = await this.organizationRepository.findOne({
      where: { id: org_id },
    });
    return organization
      ? Success.create(organization)
      : Failure.create(new BadRequestException('bad request'));
  }
}
