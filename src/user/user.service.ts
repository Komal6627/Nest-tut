import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
//     getUser() {
//         return {name:"Komal", city:"Pune"};
//       }
    get() {
        return {name:"Komal ", city:"Pune"};
      }

    create(body: any){
        return body;
    }

    update(updateUserDto: {name:string, email:string},
         param: { userId: number})
         {
            return {body: updateUserDto, param};
        }

    show(param: {userId: number}){
        return param;
    }
    delete(param: {userId: number}){
        return param;
    }
 }


