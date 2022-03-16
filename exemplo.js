var Music = /** @class */ (function () {
    function Music(harmonia, melodia, ritmo) {
        this.harmonia = harmonia;
        this.melodia = melodia;
        this.ritmo = ritmo;
    }
    Music.prototype.FazerMetronomo = function () {
        if (!this.ritmo)
            return false;
        return true;
    };
    return Music;
}());
