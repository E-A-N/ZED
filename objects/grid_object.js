/*****************"CREATION EVENT"**********************/
///Create the grid
var cell_w = 50;
var cell_h = 50;

var hcells = room_width  div cell_w;
var vcells = room_height div cell_h;

global.grid = mp_grid_create(25, 25, hcells,vcells,cell_w,cell_h);

//Create grid walls
mp_grid_add_instances(global.grid, parent_block, false);
/*******************END OF CREATION EVENT************************/

/*****************"GAME END EVENT"*************************/
mp_grid_destroy(global.grid); //clean grid to prevent memory leaks

/*****************END OF "GAME END EVENT"****************************/

/*****************"DRAW EVENT"*************************/

/*****************END OF "DRAW EVENT"****************************/

