
class Music
{
    harmonia: string
    melodia: string
    ritmo: number

    constructor(harmonia: string, melodia: string, ritmo: number)
    {
        this.harmonia = harmonia;
        this.melodia = melodia;
        this.ritmo = ritmo;
    }

    FazerMetronomo(): boolean
    {
        if(!this.ritmo)
            return false
        
        return true
    }

}