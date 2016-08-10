//Make sure the following are initiated:
//dir_face, cur_spr

switch(dir_face)
{
    case 'neutral':
    case 'right_neutral':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,0,c_white,1);
    break;

    case 'right_up':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,45,c_white,1);
    break;

    case 'right_down':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,315,c_white,1);
    break;

    case 'left_neutral':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,180,c_white,1);
    break;

    case 'left_up':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,135,c_white,1);
    break;

    case 'left_down':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,225,c_white,1);
    break;

    case 'neutral_down':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,270,c_white,1);
    break;

    case 'neutral_up':
    draw_sprite_ext(cur_spr,-1,x,y,1,1,90,c_white,1);
    break;
}