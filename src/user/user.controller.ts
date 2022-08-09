import { Controller, Get , Post, Patch, Delete, Param, Req, Body} from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('user')

export class UserController { 
    
      //  private userService;
      //  constructor(userService:UserService){
      //       this.userService = userService
      // }
    // private userService
    // constructor(){
    //   this.userService = new UserService;
    // }
     //  private userService;
      //  constructor(userService:UserService){
      //       this.userService = userService
      // }
      constructor(private userService:UserService){}
       
    @Get()
    getUsers() {
       return this.userService.get();
      // return {name:"Komal", city:"Pune"};
    }
  
    @Post()
    store(@Body() body: any){
      // return req.body;
      return this.userService.create(body);
    }
  
    @Patch('/:userId')
    update(
      @Body() updateUserDto:{ name: string; email: string},
      @Param() param:{userId: number}
    ){
        return this.userService.update(updateUserDto, param);
    }
  
    @Get('/:userId')
    show(@Param()  params:{userId: number}){
      return this.userService.show(params);
    }
    
    @Delete('/:userId')
    delete(@Param() param:{userId: number}){
      return this.userService.delete(param); 
    }
}
