var k:number=0;
var j:number=0;
var n:number=3;
var line:number=0;

var a="";
var b="";
var c="";
var d="*";
line = getLine(n);
hua(line);

function hua(n:number):void {
for (k=0;k<n;k++){
  for(j=0;j<n-k;j++)
  {

  a=a+c;
  }
    for(j=0;j<2*k+1;j++){
      b=b+d;
    }
    console.log(a+b);
    a="";
    b="";
}
}
function getLine (line:number):
number{
  return line;
}
