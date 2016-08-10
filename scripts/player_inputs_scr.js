///Inputs, enter 0 (false) to lock certain inputs

horz  = argument0; //Horizonal Input
vert  = argument1; //Vertical Input
act   = argument2; //Action Input
act_2  = argument3; //Jump Input


///Directional Based Inputs
if (horz) //Horizonal Inputs
{
    key_right = keyboard_check(ord('D')) || (gamepad_axis_value(0,gp_axislh) > 0) || (gamepad_button_check(0,gp_padr)); //walk right
    key_left = -(keyboard_check(ord('A')) || (gamepad_axis_value(0,gp_axislh) < 0) || (gamepad_button_check(0,gp_padl))); //walk left
}

if (vert) //Verticle Inputs
{
    key_up = -(keyboard_check(ord('W'))  || (gamepad_axis_value(0,gp_axislv) < 0) || (gamepad_button_check(0,gp_padu)));    //explicitly aim upwards
    key_down = keyboard_check(ord('S')) || (gamepad_axis_value(0,gp_axislv) > 0) || (gamepad_button_check(0,gp_padd));  //crouch / aerial cancel
}

//Button Inputs
if (act) //Action Input
{
    key_action = keyboard_check(ord('H')) || (gamepad_button_check_pressed(0,gp_face3)); //designate button for actions
}

if (act_2) //2nd Action Input
{
    key_action_2 = keyboard_check(ord('J')) || (gamepad_button_check_pressed(0,gp_face1));  //this button handles the second action
}

gamepad_set_axis_deadzone(0, 0.5);