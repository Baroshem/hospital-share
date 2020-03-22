import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private configService: ConfigService) {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Get('/:fullName/all')
  getAllByFullName(@Param('fullName') fullName: string) {
    return this.userService.findAllByFullName(fullName);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('create-confirmation')
  createConfirmation(@Body() id: string) {
    return this.userService.createConfirmation(id);
  }

  @Get('confirm/:token')
  async confirmCompany(@Param('token') token: string, @Res() res: Response) {
    await this.userService.confirmUser(token);
    return res.status(200).redirect(`${this.configService.get('CLIENT_URL')}/confirmation-success`)
  }
}
