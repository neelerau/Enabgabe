namespace Dönerladen {
    
    export abstract class Moveable {

        public position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        public abstract draw(): void;

        public abstract move(): void;
    }
}
