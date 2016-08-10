/*****************"CREATION EVENT"**********************/
/*
This is for debugging purposes, this object should NOT be controlling the player's navigation through different stages!
*/
if (instance_number(base_enemy) < 1)  && (room_get_name(room) != 'level_3')
{
   room_goto_next();
}
else if (instance_number(base_enemy) < 1)  && (room_get_name(room) == 'level_3')
{
   room_goto(0);
}
/*******************END OF CREATION EVENT************************/
