/**
 * The DVSAPIError class wraps the error returned by the DVS API
 */
export class DVSAPIError extends Error {
    constructor({ status, statusText, data }: {
        status: number;
        statusText: string;
        data: object;
    });
    status: number;
    statusText: string;
    data: object;
}
