//player_inputs_scr(1,1,1,1); //args = horz, vert, act, act_2

//hor_move = key_left + key_right 
//ver_move = key_up + key_down;
hsp = 0;
vsp = 0;

cur_spr = attack_sprite;

if (atk_length > limit_atk)
{
    image_index = 0;
    my_sword = instance_create(x,y,sword_cut_obj);
    my_sword.dir_face = dir_face;
    my_sword.image_speed = attackspeed;
}
if (atk_length < 2)
{
    if (key_left < 0) || (key_right) || (key_up < 0) || (key_down)
    {
        state = player_mode.walking;
    }
    else
    {
    state = player_mode.normal;
    }
}


atk_length--;
move_collide_scr(); //determines positioning
player_direction_scr(); //determine sprite angle