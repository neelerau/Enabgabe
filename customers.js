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
        function Customer(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new Dönerladen.Vector(750, 470);
            _this.velocity = new Dönerladen.Vector(1000, 0);
            _this.velocity = Dönerladen.Vector.random(150, 50);
            return _this;
        }
        Customer.prototype.draw = function () {
            var canvas = document.querySelector("#canvas");
            var crc2 = canvas.getContext("2d");
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "#e8bea0";
            crc2.arc(this.position.x, this.position.y, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
        };
        return Customer;
    }(Dönerladen.Moveable));
    Dönerladen.Customer = Customer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customers.js.map