import { Controller, Get , Post, Patch, Delete, Param, Req, Body, ParseIntPipe} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
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
    store(@Body() createUserDto:CreateUserDto){
      // return req.body;
      return this.userService.create(createUserDto);
      // return "Komal Killedar"
    }
  
    @Patch('/:userId')
    update(
      @Body() updateUserDto: UpdateUserDto,
      @Param('userId', ParseIntPipe ) userId: number
    ){
        return this.userService.update(updateUserDto, userId);
    }
  
    @Get('/:userId')
    show(@Param('userId', ParseIntPipe) userId: number){
      return this.userService.show(userId);
    }
    
    @Delete('/:userId')
    delete(@Param('userId', ParseIntPipe) userId: number){
      return this.userService.delete(userId); 
    }
}
