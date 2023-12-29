import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateUserArgs } from "../args/create-one-user";

@Resolver()
export class UserResolver {
    @Query(() => String)
    users() {
        return 'Hello Word'
    }

    @Mutation(() => String)
    createUse(@Args() args: CreateUserArgs) {
        console.log(args)
        return args.data
    }
}