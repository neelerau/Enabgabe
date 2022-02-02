namespace Dönerladen {

    export class Customer extends Moveable {
        protected position: Vector;
        protected velocity: Vector;


        constructor(_position?: Vector) {
            super(_position);


            if (_position)
                this.position = _position;
            else
                this.position = new Vector(750, 470);


            this.velocity = new Vector(1000, 0);
            this.velocity = Vector.random(150, 50);
        }

        public draw(): void {
            let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "#e8bea0";
            crc2.arc(this.position.x , this.position.y , 30, 0, 5 * Math.PI );
        
            crc2.fill();
            crc2.closePath();

        }


    }
}