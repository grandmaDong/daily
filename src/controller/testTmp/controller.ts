import {Context} from "koa";
import {getManager} from "typeorm";
import { User } from '../../entity/user/entities'

export async function operateData (ctx: Context) {
    // 获取参数
    const params = ctx.params
    console.log(params)
    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(User);

    // // load all users
    const users = await userRepository.find();

    // // return loaded users
    ctx.body = users;
}