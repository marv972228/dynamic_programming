/**
 * You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the    
 * three colours: Red, Yellow or Green while making sure that no two adjacent cells have the same colour 
 * (i.e no two cells that share vertical or horizontal sides have the same colour).
 * 
 *  You are given n the number of rows of the grid.
 * 
 * Return the number of ways you can paint this grid. As the answer may grow large, the answer must be 
 * computed modulo 10^9 + 7.
 */


const colorTraveler = (m, n, memo = {}, color) => {

    const key = color + "," + m + "," + n;

    if (key in memo) return memo[key];


}