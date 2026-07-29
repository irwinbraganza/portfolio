import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { DataService } from '../services/data.service';
import { ArchitectureDto } from '../common/dtos/architecture.dto';

@ApiTags('architecture')
@Controller('architecture')
export class ArchitectureController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  @ApiOkResponse({ type: ArchitectureDto })
  getArchitecture(): ArchitectureDto {
    return this.dataService.getArchitecture();
  }
}
