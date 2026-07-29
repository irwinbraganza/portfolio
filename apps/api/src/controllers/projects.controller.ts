import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { DataService } from '../services/data.service';
import { ProjectsDto } from '../common/dtos/projects.dto';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  @ApiOkResponse({ type: ProjectsDto })
  getProjects(): ProjectsDto {
    return this.dataService.getProjects();
  }
}
