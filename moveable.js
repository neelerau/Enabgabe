var Dönerladen;
(function (Dönerladen) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Dönerladen.Vector(750, 470);
            this.velocity = new Dönerladen.Vector(1000, 0);
        }
        Moveable.prototype.draw = function () {
            // console.log("moveable Move");
        };
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Dönerladen.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Dönerladen.crc2.canvas.height;
            if (this.position.x > Dönerladen.crc2.canvas.height)
                this.position.x -= Dönerladen.crc2.canvas.width;
            if (this.position.y > Dönerladen.crc2.canvas.height)
                this.position.y -= Dönerladen.crc2.canvas.height;
        };
        return Moveable;
    }());
    Dönerladen.Moveable = Moveable;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=moveable.js.map