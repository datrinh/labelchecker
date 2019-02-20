export interface User {
    id: number;
    username: string;
    jwtToken: {
        token: string;
    };
}
export declare class UserService {
    user: User;
    constructor();
}
