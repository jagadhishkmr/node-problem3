var request = require ("request");
var http = require ("http");
var url = require('url');
var ur =" http://localhost:8080/metrics?object=circle&metric=area&radius=5" ;
var k = url.parse(ur,true).query;
const port = process.env.PORT || 8000


var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var f = 3.14*(k.radius*k.radius) ;
    var t =f.toString();
    if (k.cricle){
       
        
        res.write("this is "+t);
        res.end()

    }
    else{
        res.write("u are not mention any value");
        res.end()
    }
   
    // var currentyear = 2021;
    // var v = currentyear - k.year ; 
  
    // var age = v.toString();
    // var g = "Hi" +" "+ k.name;
    // res.write(g);
    // res.write("  "+ "your age is" +" "+age);
    // res.end()
     
      


}).listen(port, () => {
    console.log('server started',port)
  });