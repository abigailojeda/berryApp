export interface AuthResponse {
    user: {
        id: number;
        password: string;
        username: string;
    },
    access_token: string
}
