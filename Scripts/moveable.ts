/*
Dönersimulation
Neele Rauber
MKB3
Matrikelnummer: 266954
In Zusammenarbeit mit Alessia Carbone kreiert
*/

namespace Dönerladen {


    export abstract class Moveable {
        public position: Vector;
        protected velocity: Vector;

        protected constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
        }

        public move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        abstract draw(): void;
    }
}
