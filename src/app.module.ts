import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserMiddelware } from './middleware/user.middleware';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';



@Module({
  controllers: [AppController],
  imports: [UserModule],
 
})
// export class AppModule {}

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(UserMiddelware)
      // .forRoutes('user') 
       .forRoutes(UserController)
    }
}
