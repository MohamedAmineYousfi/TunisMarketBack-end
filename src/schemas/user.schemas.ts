import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  age: number;

  @Prop({ required: true,unique :true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ default: '' })
  companyName: string;
  @Prop({ default: '' })
  companyAdress: string;
  @Prop({ default: '' })
  matriculeFiscale: string;
  @Prop({ default: '' })
  assujettieTVA: string;

  @Prop({ default: '' })
  patente: string;

  @Prop({ default: '' })
  RNE: string;

  @Prop({ default: '' })
  profileImage: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: '' })
  verificationToken: string;

  @Prop({ default: '' })
  resetPasswordToken: string;

  @Prop({ default: '' })
  resetPasswordExpire: string;

  @Prop([String])
  favoriteList: { type: string[]; default: [] };

  @Prop([String])
  adressLivraison: { type: string[]; default: [] };

  @Prop([String])
  historyOrder: { type: string[]; default: [] };

  @Prop([String])
  reviews: { type: string[]; default: [] };

  @Prop({ default: false })
  newsletter: boolean;

  @Prop({ default: Date.now })
  lastConnexion: Date;
  toObject: any;

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function( next: any): Promise<any> {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    // const hashed = await bcrypt.hash(this['password'], 10);
    var hashed ;
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
