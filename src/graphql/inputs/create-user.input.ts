import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUseInput {

    @Field()
    name: String
    @Field()
    email: String

}