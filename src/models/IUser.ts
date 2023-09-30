export interface IUser {
    email: string;
    id: string;
    username: string;
    role: string;
    type: string | null;
    isPlan: boolean;
}