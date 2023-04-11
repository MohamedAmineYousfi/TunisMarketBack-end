import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
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

}

export const UserSchema = SchemaFactory.createForClass(User);
