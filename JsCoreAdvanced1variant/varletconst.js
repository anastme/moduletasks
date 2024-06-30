function testScope() {
    if (true) {
        var xVar = 'visible var';
        let xLet = 'visible let';
        const xConst = 'visible const';
    }

    console.log(xVar); 
    console.log(xLet); 
    console.log(xConst); 
}

testScope();
