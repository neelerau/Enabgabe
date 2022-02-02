var Dönerladen;
(function (Dönerladen) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.random = function (_minLength, _maxLength) {
            var vector = new Vector(0, 0);
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        };
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
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    Dönerladen.Vector = Vector;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=vector.js.map