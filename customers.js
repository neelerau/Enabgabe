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
    var STATE;
    (function (STATE) {
        STATE[STATE["COMING"] = 0] = "COMING";
        STATE[STATE["WAITING"] = 1] = "WAITING";
        STATE[STATE["LEAVING"] = 2] = "LEAVING";
    })(STATE || (STATE = {}));
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(_position) {
            var _this = _super.call(this, _position) || this;
            _this.moods = ["pissed", "angry", "fine"];
            _this.velocity.set(150, 0);
            _this.mood = _this.moods[3];
            _this.state = STATE.COMING;
            return _this;
        }
        Customer.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
            switch (this.state) {
                case STATE.COMING:
                    var nextInLine = test[test.indexOf(this) - 1];
                    if (this.position.x >= Dönerladen.middleX - 150) {
                        this.velocity.set(0, 0);
                        this.state = STATE.WAITING;
                        break;
                    }
                    else if (nextInLine) {
                        if ((this.velocity.length * _timeslice) + 150 > new Dönerladen.Vector(nextInLine.position.x + this.position.x, nextInLine.position.y + this.position.y).length) {
                            this.velocity.set(1500, 0);
                        }
                        else {
                            this.velocity.set(150, 0);
                        }
                    }
                    break;
                case STATE.LEAVING:
                    if (this.position.y > Dönerladen.crc2.canvas.height + 50)
                        Dönerladen.removeCustomer(this);
            }
        };
        Customer.prototype.receiveFood = function () {
            this.velocity.set(0, 150);
            this.state = STATE.LEAVING;
        };
        return Customer;
    }(Dönerladen.Human));
    Dönerladen.Customer = Customer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customers.js.map