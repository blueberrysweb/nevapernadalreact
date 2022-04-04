import { FRAME_RATE } from "./constants";

let vent = 0; 

export function moureFlocs(flocs){
    vent = Math.min(2,
        Math.max(-2, vent + (20 /   FRAME_RATE) * (Math.random() - 0,5))
        );

    return flocs.map(moureFlocs);
}

function moureFloc(floc) {
    let x = floc.x + (10 / FRAME_RATE) * Math.random();
    if (x > 100) x = -10;
    let y = floc.y + vent * (10 / FRAME_RATE) * Math.random();
    if (y > 110) y = -10;
    if (y < -10) y= 110;
    return {...floc, x, y};
}