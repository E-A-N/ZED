/*****************"CREATION EVENT"**********************/
///Initialize Path
path = path_add();
act_count = 5;
movespeed = random(4);
reaction = floor(random(100)) + 100;

//graphics
idle_sprite = e_char_spr;
walk_sprite = e_walk_spr;
image_speed = 0.10;
cur_spr = idle_sprite;

//facing direction
previous_x = 0;
previous_y = 0;
h_face = 'right';
v_face = 'neutral';
dir_face = 'neutral';
/*******************END OF CREATION EVENT************************/

/*****************"STEP EVENT"*************************/
//Find player's location
var mx = base_character.x// div 50)*50 + 25;
var my = base_character.y// div 50)*50 + 25;

//Align self to grid for A* Algorithm search
if (act_count < 1)
{
    if (mp_grid_path(global.grid,path,x,y,mx,my,1))
    {
        path_start(path,movespeed,path_action_stop,false);
        act_count = reaction;
    }

}
else
{
    act_count--;
}

//find facing direction

if ((previous_x != x) || (previous_y != y))
{

    //calculate horizontal direction
    if (previous_x < x)
    {
        h_face = 'right';
    }
    else if (previous_x > x)
    {
        h_face = 'left';
    }
    else
    {
        h_face = 'neutral';
    }

    //calculate verticle direction
    if (previous_y < y)
    {
        v_face = 'down';
    }
    else if (previous_y > y)
    {
        v_face = 'up';
    }
    else
    {
        v_face = 'neutral';
    }

    cur_spr = walk_sprite;
}
else if (cur_spr != idle_sprite)
{
    cur_spr = idle_sprite;
}


dir_face = h_face + '_' + v_face;
previous_x = x;
previous_y = y;
/*****************END OF "STEP EVENT"****************************/

/*****************"COLLISION WITH sword_cut_obj EVENT"***********/
instance_destroy();
/*****************END OF "COLLISION WITH sword_cut_obj EVENT"***********/

/*****************"DRAW EVENT"*************************/
//direction_face variable (dir_face) is updated in step event
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
/*****************END OF "DRAW EVENT"****************************/

