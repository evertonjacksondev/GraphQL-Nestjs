import { ArgsType, Field } from "@nestjs/graphql";
import { CreateUseInput } from "../inputs/create-user.input";

@ArgsType()
export class CreateUserArgs {
    @Field()
    data: CreateUseInput
}