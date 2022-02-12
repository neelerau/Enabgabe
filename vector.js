var Dönerladen;
(function (Dönerladen) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Object.defineProperty(Vector.prototype, "length", {
            get: function () {
                var length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
                return (length);
            },
            enumerable: false,
            configurable: true
        });
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.copy = function () {
            var copy = new Vector(this.x, this.y);
            return (copy);
        };
        return Vector;
    }());
    Dönerladen.Vector = Vector;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=vector.js.map