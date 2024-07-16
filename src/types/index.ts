export interface iSellingPoint {
  compulsory: boolean;
  name: "General";
  active: boolean;
  price: number;
  annotation?: string;
  services: string[];
  selectedCheckboxesProps?: string[];
  setSelectedCheckboxes?: any
}

export interface iOptional {
  index?: number,
  name: string;
  price: number;
  active: boolean;
}

export type dataItem = {
  heading: string;
  details: string;
};

export interface iModalData {
  showModal: boolean;
  name: string;
  modalData: dataItem[];
}
export interface CheckboxState {
  id: number;
  selected: boolean;
}

export interface AppState {
  checkboxes: CheckboxState[];
}

export interface SelectCheckboxAction {
  type: string;
  payload: string;
}

export interface DeselectCheckboxAction {
  type: string;
  payload: string;
}
export interface iFlexibleOffer {
  compulsory: boolean;
  name: "Flexible";
  active: boolean;
  price: number;
  annotation?: string;
  checkboxes: {
    id: string;
    selected: boolean
  }[]
}
export type ModalParams = Omit<iModalData, "showModal">;