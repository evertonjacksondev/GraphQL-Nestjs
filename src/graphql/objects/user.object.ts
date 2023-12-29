import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class userObject {

    @Field()
    name: String
    @Field()
    email: String

}