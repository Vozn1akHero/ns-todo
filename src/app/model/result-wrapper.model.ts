import { ERes } from "./../enums/res.enum";
export class ResultWrapper {
    res: ERes;
    data: any;

    constructor(res: ERes, data: any) {
        this.res = res;
        this.data = data;
    }
}
