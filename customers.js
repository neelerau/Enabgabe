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
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(_position, _color) {
            var _this = _super.call(this, _position) || this;
            _this.startMoving = false;
            _this.radius = 40;
            return _this;
        }
        Customer.prototype.draw = function () {
            Dönerladen.crc2.save();
            // Circle
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Dönerladen.crc2.closePath();
            Dönerladen.crc2.fillStyle = "red"; // yellow
            Dönerladen.crc2.fill();
        };
        Customer.prototype.move = function () {
            if (this.destination) {
                var direction = new Dönerladen.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
                var distance = 0;
                if (this.startMoving == true) {
                    this.destination.x -= distance;
                    this.destination.y -= distance;
                    this.startMoving = false;
                }
                direction.scale(1 / 50);
                if (distance < 300) {
                    this.position.add(new Dönerladen.Vector(direction.x * 6, direction.y * 6));
                }
                else {
                    this.position.add(direction);
                }
            }
        };
        return Customer;
    }(Dönerladen.Moveable));
    Dönerladen.Customer = Customer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customers.js.map