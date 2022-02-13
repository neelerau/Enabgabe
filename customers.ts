namespace Dönerladen {

    enum STATE {
        COMING,
        ORDERING,
        FINISH
    }
    
    export class Customer extends Moveable { 
        public state: STATE;
        private color: string;
    

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.velocity.set(-150, 0);
            this.state = STATE.COMING;
            this.color = _color;
            middleX = crc2.canvas.width;
            middleY = crc2.canvas.height / 2;
        }

    public draw(): void {
            crc2.save();
            crc2.fillStyle = this.color;
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 30, 0, 360);
            crc2.fill();
            crc2.restore();
        }
    
    public move(_timeslice: number): void {
        
        super.move(_timeslice);
        switch (this.state) {
        
                case STATE.COMING: 
                let nextInLine: Customer = customerIn[customerIn.indexOf(this) - 1];
                if (this.position.x <= 550) {
                        this.velocity.set(0, 0);
                        this.state = STATE.ORDERING;
                        break;
                }
                else if (nextInLine) {
                    if ((this.velocity.length * _timeslice) + 150 > new Vector(nextInLine.position.x - this.position.x,  nextInLine.position.y - this.position.y).length) {
                       this.velocity.set(0, 0);
                }
                else {
                    this.velocity.set(-150, 0);
                }
    
            }
                break;
            case STATE.FINISH: 
        if (this.position.y > crc2.canvas.height + 0)
                removeCustomer(this);
        }
        }
        public receiveFood(): void {
            this.velocity.set(0, 150);
            this.state = STATE.FINISH;
    
        }}}