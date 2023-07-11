export class UtilsHelper{
    static isValid(value:any) : boolean  {
        return(value !== null && value !== undefined && !Number.isNaN(value))
    }

};

