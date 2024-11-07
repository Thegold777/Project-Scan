export interface IAuthResponse {
  accessToken: string;
  // ... другие поля, которые вам нужны
}

export interface IUserInfo {
    // здесь определите необходимые поля
    id?: number;
    name?: string;
    email?: string;
    // ... другие поля
}

export interface SearchOptions {
  // Добавьте необходимые поля
  // Например:
  query?: string;
  filters?: Record<string, any>;
  // ... другие поля
} 