export interface AccessTokenResponse {
    access_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
}

export interface CaseResponse {
    date: Date;
    cases?: BigInteger;
    data?: BigInteger;
}