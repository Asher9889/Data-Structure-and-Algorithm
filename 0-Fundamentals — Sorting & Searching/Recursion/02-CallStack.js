function fun(){
    console.log("Enter in fn fun");
    let f = 10;
    console.log("Exit from fun");
}

function gun(){
    console.log("Enter inside GUN");
    let g = 45;
    fun();
    console.log("Exit from Gun")
}

function run(){
    console.log("Enter inside RUN");
    var r = 258;
    gun();
    console.log("Exit from run")
}

run();