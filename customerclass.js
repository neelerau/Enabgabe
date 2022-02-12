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
    var Human = /** @class */ (function (_super) {
        __extends(Human, _super);
        function Human(_position) {
            return _super.call(this, _position) || this;
        }
        Human.prototype.draw = function () {
            Dönerladen.crc2.save();
            Dönerladen.crc2.fillStyle = "red";
            Dönerladen.crc2.translate(this.position.x, this.position.y);
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.arc(0, 0, 30, 0, 360);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.restore();
        };
        Human.prototype.updateMood = function (_addend) {
            this.mood = this.moods[this.moods.indexOf(this.mood) + _addend];
        };
        return Human;
    }(Dönerladen.Moveable));
    Dönerladen.Human = Human;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=customerclass.js.map