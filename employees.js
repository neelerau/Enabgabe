var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dönerladen;
(function (Dönerladen) {
    var Employees = /** @class */ (function (_super) {
        __extends(Employees, _super);
        function Employees(_position, _color, _colors) {
            var _this = _super.call(this, _position) || this;
            _this.startMoving = false;
            _this.radius = 30;
            _this.color = _color;
            _this.velocity.set(150, 0);
            _this.strokecolor = _colors;
            return _this;
        }
        Employees.prototype.draw = function () {
            var _this = this;
            Dönerladen.crc2.save();
            // Emloyee
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Dönerladen.crc2.closePath();
            Dönerladen.crc2.stroke();
            Dönerladen.crc2.lineWidth = 10;
            Dönerladen.crc2.strokeStyle = this.strokecolor;
            Dönerladen.crc2.fillStyle = this.color;
            Dönerladen.crc2.fill();
            setTimeout(function () {
                _this.strokecolor = "red";
            }, 2000);
        };
        Employees.prototype.move = function () {
            var _this = this;
            if (this.destination) {
                var direction = new Dönerladen.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
                var distance = 0;
                if (this.startMoving == true) {
                    this.destination.x -= distance;
                    this.destination.y -= distance;
                    this.velocity.set(150, 0);
                    this.startMoving = false;
                }
                direction.scale(1 / 50);
                if (distance < 300) {
                    this.position.add(new Dönerladen.Vector(direction.x * 6, direction.y * 6));
                }
                else {
                    this.position.add(direction);
                }
                setTimeout(function () {
                    _this.velocity.set(150, 0);
                }, 3500);
            }
        };
        return Employees;
    }(Dönerladen.Moveable));
    Dönerladen.Employees = Employees;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=employees.js.map