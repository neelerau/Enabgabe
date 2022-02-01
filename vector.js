var Dönerladen;
(function (Dönerladen) {
    //Jirkas Code (Asteroids/vector.ts)
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = _x,
                this.y = _y;
        }
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                return Math.hypot(this.x, this.y);
            },
            enumerable: false,
            configurable: true
        });
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