namespace Dönerladen {

    enum STATE {
        COMING,
        WAITING,
        LEAVING
    }
    export class Customer extends Human {
        public state: STATE;
        public moods: string[] = ["pissed", "angry", "fine"];


        public constructor(_position: Vector) {
            super(_position);
            this.velocity.set(150, 0);
            this.mood = this.moods[3];
            this.state = STATE.COMING;
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);

            switch (this.state) {
                case STATE.COMING:
                    let nextInLine: Customer = test[test.indexOf(this) - 1];
                    if (this.position.x >= middleX - 150) {
                        this.velocity.set(0, 0);
                        this.state = STATE.WAITING;
                        break;
                    }
                    else if (nextInLine) {
                        if ((this.velocity.length * _timeslice ) + 150 > new Vector(nextInLine.position.x + this.position.x, nextInLine.position.y + this.position.y).length) {
                            this.velocity.set(1500, 0);
                        }
                        else {
                            this.velocity.set(150, 0);
                        }

                    }
                    break;
                case STATE.LEAVING:
                    if (this.position.y > crc2.canvas.height + 50)
                        removeCustomer(this);
            }
        }
        public receiveFood(): void {
            this.velocity.set(0, 150);
            this.state = STATE.LEAVING;

        }
    }
}



