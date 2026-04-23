class Proj {
    constructor(x,y,tgt,dmg,tm,typ) {
        this.x=x; this.y=y; this.tgt=tgt; this.dmg=dmg; this.tm=tm; this.typ=typ;
        let a = Math.atan2(tgt.y-y, tgt.x-x), spd = typ==='cannonball'?18:12;
        this.vx = Math.cos(a)*spd; this.vy = Math.sin(a)*spd; this.act = true;
    }
    update() {
        this.x+=this.vx; this.y+=this.vy;
        if(this.x<0||this.x>cvs.width||this.y<0||this.y>cvs.height) this.act=false;
        if(this.tgt && this.tgt.hp>0 && Math.hypot(this.x-this.tgt.x, this.y-this.tgt.y)<(this.tgt.r==='elephant'?45:25)) {
            this.tgt.hp-=this.dmg; this.tgt.ft=5;
            if(this.typ==='ice') this.tgt.frz=80; if(this.typ==='fire') this.tgt.hp-=5;
            let pr = this.tgt.r==='elephant'?0.1:(this.tgt.r==='cannon'?0:0.5); if(this.typ==='cannonball') pr*=4;
            this.tgt.vx+=this.vx*pr; this.tgt.vy+=this.vy*pr; this.act=false;
        }
    }
    draw() {
        ctx.fillStyle=this.typ==='cannonball'?'#222':(this.typ==='fire'?'#f39c12':(this.typ==='ice'?'#0ff':'#fff'));
        ctx.beginPath(); ctx.arc(this.x,this.y,this.typ==='cannonball'?8:6,0,Math.PI*2); ctx.fill();
    }
}
