function outer(a,b){
    function inner(c,d){
        console.log(`Inner function: ${a+b+c+d}`)
    }
    console.log("outer function")
    inner(a+1,b+1)
}
outer(1,2)