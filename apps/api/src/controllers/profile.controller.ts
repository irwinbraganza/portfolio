import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { DataService } from '../services/data.service';
import { ProfileDto } from '../common/dtos/profile.dto';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  @ApiOkResponse({ type: ProfileDto })
  getProfile(): ProfileDto {
    return this.dataService.getProfile();
  }
}
