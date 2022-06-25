import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

export type BookDocument = Book & Document

@Schema()
export class Book {
    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string

    @Prop()
    title: string

    @Prop()
    author: string

    @Prop()
    category: string
}

export const BookSchema = SchemaFactory.createForClass(Book)