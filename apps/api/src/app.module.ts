import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { ProfileController } from './controllers/profile.controller';
import { ProjectsController } from './controllers/projects.controller';
import { ArchitectureController } from './controllers/architecture.controller';
import { DataService } from './services/data.service';

@Module({
  imports: [],
  controllers: [
    HealthController,
    ProfileController,
    ProjectsController,
    ArchitectureController
  ],
  providers: [DataService]
})
export class AppModule {}
