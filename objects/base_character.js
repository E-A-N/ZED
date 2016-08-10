/*****************"CREATION EVENT"**********************/
///Iniltialize VAriables
hsp = 0;
vsp = 0;



//Graphics
//Never change the following sprite values in game
idle_sprite   = main_idle_spr;
walk_sprite   = main_walk_spr;
attack_sprite = main_attack_spr;

//sprite values below is for changing sprite in game
cur_spr = idle_sprite;

//facing direction
previous_x = 0;
previous_y = 0;
h_face = 'right';
v_face = 'neutral';
dir_face = 'neutral';
face = 'right'



//State Machines
state = player_mode.normal; //update SMs in 'STEP EVENT'


//Stat Attributes
movespeed = 3;
attackspeed = 0.75;//attackspeed corresponds to image_speed e.g: 1.0 = 100%
hit_points = 30; //enemies do 60dps gradually via collision

//Temporary Attributes
atk_length = 0; //initialization attack state properties
limit_atk = 0;
/*******************END OF CREATION EVENT************************/

/*****************"STEP EVENT"*************************/
switch (state)
{   //Player modes are initiazed by an enumerator
    case player_mode.normal:    player_normal_scr();      break;
    case player_mode.walking:   player_walking_scr();     break;
    case player_mode.attacking: player_attacking_scr ();  break;

}


//Check if player is dead
if (hit_points > 0)
{
    hit_points = 0;
    game_restart();
}
/*****************END OF "STEP EVENT"****************************/

/*****************"DRAW EVENT"*************************/
draw_direction_scr();
/*****************END OF "DRAW EVENT"****************************/






























