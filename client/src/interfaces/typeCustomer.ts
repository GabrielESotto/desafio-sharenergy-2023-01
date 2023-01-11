export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;
}

export type CreateCustomerType = {
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;
  itIsOpen: boolean;
  btnIsClicked: boolean;
  catchMessage: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  setBtnIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCatchMessage: React.Dispatch<React.SetStateAction<string>>;
  handleCreate: () => void;
  closeModal: () => void;
}

export type UpdateCustomerType = {
  getOneCustomer: (id: string) => void;
  updateName: string;
  updateEmail: string;
  updatePhone: string;
  updateAdress: string;
  updateCpf: string;
  setUpdateName: React.Dispatch<React.SetStateAction<string>>;
  setUpdateEmail: React.Dispatch<React.SetStateAction<string>>;
  setUpdatePhone: React.Dispatch<React.SetStateAction<string>>;
  setUpdateAdress: React.Dispatch<React.SetStateAction<string>>;
  setUpdateCpf: React.Dispatch<React.SetStateAction<string>>;
}
