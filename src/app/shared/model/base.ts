

export interface Iuser{
    name : string;
    id : number;
}


export interface Iproduct{
    id:number;
    pName : string;
    pStatus : string;
}


export type uniPro = Iproduct | undefined;