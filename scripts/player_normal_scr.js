player_inputs_scr(1,1,1,1); //args = horz, vert, act, act_2

hor_move = key_left + key_right 
ver_move = key_up + key_down;
hsp = hor_move * movespeed;
vsp = ver_move * movespeed;
cur_spr = idle_sprite;
image_speed = 0.5;

if (key_left < 0) || (key_right) || (key_up < 0) || (key_down)
{
    state = player_mode.walking;
}

if (key_action == 1)
{   //attacking
    atk_length = sprite_get_number(attack_sprite) / attackspeed; //change attackspeed in creation event
    limit_atk = atk_length - 1; //enable animation control flow in attack_state
    state = player_mode.attacking;
    image_speed = attackspeed; //adjust speed for animation syncing
}

move_collide_scr(); //determines positioning
player_direction_scr(); //determine sprite angle