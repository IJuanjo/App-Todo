export interface HttpEntity<T> {
    status: number;
    message: string;
    data?: T;
}