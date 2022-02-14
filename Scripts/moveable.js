/*
Dönersimulation
Neele Rauber
MKB3
Matrikelnummer: 266954
In Zusammenarbeit mit Alessia Carbone kreiert
*/
var Dönerladen;
(function (Dönerladen) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            this.position = _position;
            this.velocity = new Dönerladen.Vector(0, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        return Moveable;
    }());
    Dönerladen.Moveable = Moveable;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=moveable.js.map