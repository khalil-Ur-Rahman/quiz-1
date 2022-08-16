function quadratic (x,y,z){
    let a =(-x-Math.sqrt(y **2-  4 * x * z))/(2**x);
    let b =(-x+Math.sqrt(y** 2- 4 * x * z))/(2**x);
    return(a,b)
}
console.log("the squre root is equal to   "  +quadratic(1,4,-9));