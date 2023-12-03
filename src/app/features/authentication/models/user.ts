export interface TokenPayload {
    sub: string;
    exp: number;
    role: string;
    email: string;
    userName: string;
    grade: string;
    
  }
  
  export class User implements TokenPayload {
    sub: string;
    exp: number;
    role: string;
    email: string;
    userName: string;
    grade: string;
  
    constructor(sub: string, exp: number, role: string, email: string, userName: string, grade: string) {
      this.sub = sub;
      this.exp = exp;
      this.role = role;
      this.email = email;
      this.userName = userName;
      this.grade = grade;
    }
  
    // You can add additional methods and behavior specific to employees here
  }