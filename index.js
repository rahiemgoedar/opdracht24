//no arguments
const paintWalls = function (item) {
    console.log('The wall has been painted ' + item);
};

//single argument
const colorPaint = "green"

paintWalls(colorPaint);

const anotherColor = 'yellow'
paintWalls(anotherColor);

paintWalls();//then you'll get 'the wall has been painted undefined'.

//Multiple arguments
const paintWallsAndChooseWallAndColor = function (item1, item2) {
    console.log('The ' + item1 + ' has been painted ' + item2);
};

const witchWall = 'East Wall';
const witchColor = 'Grey';
paintWallsAndChooseWallAndColor(witchWall, witchColor);
paintWallsAndChooseWallAndColor(witchColor, witchWall); //the order of the items matter.
paintWallsAndChooseWallAndColor(witchWall, witchColor); //the order also matters is you change it in the function.

