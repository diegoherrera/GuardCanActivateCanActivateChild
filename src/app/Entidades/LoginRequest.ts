export class LoginRequest {
    usuario: string;
    clave: string;
    constructor(pusuario: string, pclave: string) {
        this.usuario = pusuario;
        this.clave = pclave;
    }

}