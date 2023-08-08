import { Module } from '@nestjs/common';
import { GameSetupService } from './game-setup.service';
import { GameSetupController } from './game-setup.controller';

@Module({
  providers: [GameSetupService],
  controllers: [GameSetupController]
})
export class GameSetupModule {}
