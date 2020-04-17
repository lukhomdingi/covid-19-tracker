import { environment } from '@environments/environment';

export class Api {
    public static readonly KEY = environment.nubentos.key;
}

export class Uri {
    public static readonly BASE = environment.apiUrl;
    public static readonly ACCESS_TOKEN = `${Uri.BASE}/token?grant_type=client_credentials`;
    public static readonly CASES = `${Uri.BASE}/t/nubentos.com/ncovapi/1.0.0/cases`;
    public static readonly CONFIRMED_CASES = `${Uri.BASE}/t/nubentos.com/ncovapi/1.0.0/cases/confirmed`;
    public static readonly SUSPECTED_CASES = `${Uri.BASE}/t/nubentos.com/ncovapi/1.0.0/cases/suspected`;
    public static readonly DEATHS = `${Uri.BASE}/t/nubentos.com/ncovapi/1.0.0/deaths`;
    public static readonly RECOVERED = `${Uri.BASE}/t/nubentos.com/ncovapi/1.0.0/recovered`;
}
