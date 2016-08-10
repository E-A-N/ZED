///Find facing direction
//make sure following variables are initiated:
//previous_x, previous_y, h_face, v_face, dir_face

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
}

//dir_face directly controls how object is drawn
dir_face = h_face + '_' + v_face; //Use concatenation to identify sprite direction
previous_x = x;
previous_y = y;