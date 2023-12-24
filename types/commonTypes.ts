export type studentType = {
  name: string;
  fatherName: string;
  address: string;
  cnic: number;
  dob: string;
  studentMobile: number;
  fatherMobile: number;
  session: string;
  section: string;
  class: string;
};

export type onChangeEventType = {
  target: { value: string, name:string } 
}