export interface IAuthResponse {
  accessToken: string;

}

export interface IUserInfo {
    usedCompanyCount: number;
    companyLimit: number;
  
    id?: number;
    name?: string;
    email?: string;
   
}

export interface SearchOptions {
  
  query?: string;
  filters?: Record<string, any>;
  
}

export interface IUserState {
  isAuth: boolean;
  status: string;
  error: string | null;
  usedCompany: number;
  companyLimit: number;
  isLoaded: boolean;
  fetchedData: null;
}