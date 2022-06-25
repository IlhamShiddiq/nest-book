import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async findAll() {
    return await this.UserModel.find({}).exec()
  }

  async findOne(id: string) {
    return await this.UserModel.findById(id).exec()
  }

  async create(payload: CreateUserDto) {
    delete payload.password_confirmation
    const data = {
      ...payload,
      password: await bcrypt.hash(payload.password, 10)
    }

    const newUser = new this.UserModel(data)
    return newUser.save()
  }

  async update(id: string, payload: UpdateUserDto) {
    const data = {
      username: payload.username,
      full_name: payload.full_name
    }

    return await this.UserModel.findByIdAndUpdate(id, data).exec()
  }

  async remove(id: string) {
    return await this.UserModel.findByIdAndRemove(id).exec()
  }
}
