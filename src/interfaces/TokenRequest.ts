export interface TokenRequest {
    grant_type: string;
    code: string;
    redirect_uri: string;
}

export interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
}