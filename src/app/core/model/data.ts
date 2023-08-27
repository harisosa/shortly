import { IResult } from "../interface/IResponse";

export class DataModel{
    id :number;
    copy : boolean;
    code: string;
    short_link: string;
    full_short_link: string;
    full_share_link:string;
    original_link: string;
    constructor(result :IResult,id: number){
        this.id=id;
        this.code = result.code;
        this.short_link = result.short_link;
        this.full_short_link = result.full_short_link;
        this.full_share_link = result.full_share_link;
        this.original_link = result.original_link;
        this.copy = false;
    }

}
