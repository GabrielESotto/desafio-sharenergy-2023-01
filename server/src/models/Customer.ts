import mongoose, { Document, Schema } from 'mongoose'

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;
}

const CostumerSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, required: true },
    adress: { type: String, required: true },
    cpf: { type: String, required: true },
  },
  {
    versionKey: false
  }
)

export default mongoose.model<ICustomer>('Costumer', CostumerSchema);
