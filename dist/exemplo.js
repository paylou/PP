"use strict";
class Music {
    constructor(harmonia, melodia, ritmo) {
        this.harmonia = harmonia;
        this.melodia = melodia;
        this.ritmo = ritmo;
    }
    FazerMetronomo() {
        if (!this.ritmo)
            return false;
        return true;
    }
}
let musica1 = new Music("C#", "5-3-8", 80);
console.log(musica1.harmonia + " " + musica1.melodia + "" + musica1.ritmo);
