export class Trainee{
  id :number;
  fullName : string;
  age :number;
  phoneNumber : string;
  height : number;
  weight : number;
  physicalLimitation : string;
  details :string;
  email : string;
  gender : string;
  status : boolean;
  constructor(id :number,fullName:string ,age:number ,phoneNumber:string ,height:number ,weight:number ,physicalLimitation:string , details: string , email :string , gender:string , active : boolean)
  {
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.height = height;
    this.weight = weight;
    this.physicalLimitation = physicalLimitation;
    this.details  =details;
    this.email = email;
    this.gender = gender;
    this.status = active;
  }
}