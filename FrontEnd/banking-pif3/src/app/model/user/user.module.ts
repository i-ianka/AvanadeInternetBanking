
export interface IUser {
  
  id: number
  nome: string
}

export interface Iapi {
  message: string
}

export class User implements IUser {
 constructor(
     public id: number,
     public nome: string
    
 ) { } }

