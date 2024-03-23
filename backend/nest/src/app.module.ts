import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { graphQLModule } from '@/infrastructure/graphql/graphQLModule';
import { RoomsModule } from './modules/rooms/rooms.module';
import { typeOrmModule } from '@/infrastructure/db/typeOrmModule';
import { UsersModule } from './modules/users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [graphQLModule, RoomsModule, UsersModule, typeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
