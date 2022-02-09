var Dönerladen;
(function (Dönerladen) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = _x,
                this.y = _y;
        }
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        return Vector;
    }());
    Dönerladen.Vector = Vector;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=vector.js.map