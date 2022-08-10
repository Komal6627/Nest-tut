import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
//     getUser() {
//         return {name:"Komal", city:"Pune"};
//       }
    get() {
        return {name:"Komal ", email:"komal@123"};
      }

    create(createUserDto: CreateUserDto){
        return createUserDto;
    }

    update(updateUserDto: UpdateUserDto,
         userId: number)
         {
            return {body: updateUserDto, userId};
        }

    show(userId: number){
        return {userId};
    }
    delete(userId: number){
        return {userId};
    }
 }


