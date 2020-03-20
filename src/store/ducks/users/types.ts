/**
 * Actions types
 */
export enum UsersTypes {
    LOAD_REQUEST = '@users/LOAD_REQUEST',
    LOAD_SUCCESS = '@users/LOAD_SUCCESS',
    LOAD_FAILURE = '@users/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface User {
    id: any;
    name: string;
    address: { country: string; city: string; street: string; state: string };
    email: string;
    phone: string;
    avatarUrl: string;
    createdAt: number | undefined;
}

/**
 * State type
 */
export interface UsersState {
    readonly data: User[];
    readonly loading: boolean;
    readonly error: boolean
}