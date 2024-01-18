//validation check
function isTriangle(a, b, c)
{  
    return (a + b > c) && (a + c > b) && (b + c > a);  
}

//caculate area
function areaOfTriangle(a, b, c)
{  
    // input validation check 
    if (!isTriangle(a, b, c))
    {  
        console.log("数据不合法");
        return ;
    }  
    else
    { 
    var parameter = a + b + c;  //parameter
    var area = Math.sqrt(s/2 * (s/2 - a) * (s/2 - b) * (s/2 - c));  // Heron fornula  
    console.log(area);  //output
    }
}  



//main
areaOfTriangle(3, 4, 5);