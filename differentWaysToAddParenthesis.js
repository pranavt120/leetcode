var diffWaysToCompute = function(expression) {
    if(expression.length === 3){
        return [eval(expression),eval(expression)];
    }

    let left = [eval(expression.slice(0,2)+diffWaysToCompute(expression.slice(2))[0]),eval(expression.slice(0,2)+diffWaysToCompute(expression.slice(2))[1])];
    let right = [eval(diffWaysToCompute(expression.slice(0, expression.length -2))[0] + expression.split('').reverse().join('').slice(0,2)), eval(diffWaysToCompute(expression.slice(0, expression.length -2))[1] + expression.split('').reverse().join('').slice(0,2))];
    return [left,right]; 
   
};



var solve = function(exprssion){
    const left = diffWaysToCompute(exprssion);
    console.log(left);
}

solve("2*3-4*5");