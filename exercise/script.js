function baitap1(a,b){
  if(a==b) return (a+b)*3;
  return a+b;
}
function baitap2(a) {
  if(a<=19) return 19-a;
  return (a-19)*3
}
function baitap3(s1) { 
  var mang = [];
  var s2 = s1.replace("*","0");  
  var sum=0;
  for(i=0;i<s2.length;i++){
    sum = sum + Number(s2.charAt(i));
  }
  for(i=0;i<10;i++){
    if((sum+i)%3==0){
      var rs =s1.replace("*",i);
      mang.push(rs);    
    }
  }
  return mang;
}
function baitap4(s1) { 
  var mang = [];
  var s2;  
  for(i=0;i<10;i++){
    s2 = s1.replace("*",i);
    var sum =0;
    for(j=0;j<s2.length;j++){
       sum = sum + Number(s2.charAt(j));
    }
    if((sum%3==0) && (Number(s2.charAt(s2.length-1))%2 == 0)) {    
      mang.push(s2);
    }
  }
  return mang;
}


