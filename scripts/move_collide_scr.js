//Horizonal Collision
if (place_meeting(x+hsp,y,parent_block))
{
   while(!place_meeting(x+sign(hsp),y,parent_block))
    {
        x += sign(hsp);
    }
    hsp = 0;
}

x += hsp;

// Collision
if (place_meeting(x,y+vsp,parent_block))
{
   while(!place_meeting(x,y+sign(vsp),parent_block))
    {
        y += sign(vsp);
    }
    vsp = 0;
}

y += vsp;