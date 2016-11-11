var lastIndex = 19; function test0(){var flag = false; var flagI = false;  flagI = false;  var Num = document.getElementById("txtNum").value;if (Num == "") { flag = true; flagI = true;} var Num = Number(document.getElementById("txtNum").value);if (isNaN(Num) || !Number.isInteger(Num)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("Num");if(flag){ resultadoInvalido(0); }else{ reactToAnswer(correct0(Num) != wrong0(Num),0,"Num: " +Num ); } }
      function correct0(num){
      if(num%2==0){
      return 0;
      }else{
      return 1;
      }
      }
      function wrong0(num){
      return num;
      }
     function test1(){var flag = false; var flagI = false;  flagI = false;  var age = document.getElementById("txtage").value;if (age == "") { flag = true; flagI = true;} var age = Number(document.getElementById("txtage").value);if (isNaN(age) || !Number.isInteger(age)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("age");if(flag){ resultadoInvalido(1); }else{ reactToAnswer(correct1(age) != wrong1(age),1,"age: " +age ); } }
      function correct1(age){
      return age >= 18;
      }
      function wrong1(age){
      return age > 18;
      }
     function test2(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(2); }else{ reactToAnswer(correct2( a, b) != wrong2( a, b),2,"a: "+a+"; "+"b: " +b ); } }
      function correct2(a, b){
      return a+b
      }
      function wrong2(a, b){
      if (a == b) return a;
      else return a+b;
      }
     function test3(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(3); }else{ reactToAnswer(correct3( a, b) != wrong3( a, b),3,"a: "+a+"; "+"b: " +b ); } }
      function correct3(a,b){
      return a+b >=32 || (a>=16 && b>=16);
      }
      function wrong3(a,b){
      return a+b >= 32 && a>=16 && b>=16;
      }
     function test4(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c"); flagI = false;  var d = document.getElementById("txtd").value;if (d == "") { flag = true; flagI = true;} var d = Number(document.getElementById("txtd").value);if (isNaN(d) || !Number.isInteger(d)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("d"); flagI = false;  var e = document.getElementById("txte").value;if (e == "") { flag = true; flagI = true;} var e = Number(document.getElementById("txte").value);if (isNaN(e) || !Number.isInteger(e)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("e");if(flag){ resultadoInvalido(4); }else{ reactToAnswer(correct4( a,  b,  c,  d, e) != wrong4( a,  b,  c,  d, e),4,"a: "+a+"; "+"b: "+b+"; "+"c: "+c+"; "+"d: "+d+"; "+"e: " +e ); } }
      function correct4(a, b, c, d, e){
        return a==b || a==c || a==d || a==e || b == c || b==d || b==e || c==d || c==e || d==e;
      }
      function wrong4(a, b, c, d, e){
        return a==b || a==c || a==d || a==e || c==d || c==e || d==e;     
      }
     function test5(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(5); }else{ reactToAnswer(correct5( a,  b, c) != wrong5( a,  b, c),5,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct5(a, b, c){
        return a+b>c && a+c>b && b+c>a;
      }
      function wrong5(a, b, c){
        return a+b>c;
      }      
     function test6(){var flag = false; var flagI = false;  flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var h = document.getElementById("txth").value;if (h == "") { flag = true; flagI = true;} var h = Number(document.getElementById("txth").value);if (isNaN(h) || !Number.isInteger(h)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("h");if(flag){ resultadoInvalido(6); }else{ reactToAnswer(correct6( b, h) != wrong6( b, h),6,"b: "+b+"; "+"h: " +h ); } }
      function correct6(b, h){
        return b*h/2;
      }
      function wrong6(b, h){
        if(b>h){
          return b/2*h/2;
        }else{
          return b*h/2;
        }
      }
     function test7(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(7); }else{ reactToAnswer(correct7( a, b) != wrong7( a, b),7,"a: "+a+"; "+"b: " +b ); } }
      function correct7(a, b){
        if( a > b){
          return a;        
        }
        return b;
      }
      function wrong7(a, b){
        if(a > b){
          return a;
        }
        if(b > a){
          return b;
        }
        return 0;
      }
     function test8(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(8); }else{ reactToAnswer(correct8( a, b) != wrong8( a, b),8,"a: "+a+"; "+"b: " +b ); } }
      function correct8(a, b){
        return (a < b  && a) || b;
      }
      function wrong8(a, b){
        return (a < b && a) || (a>b && b);
      }
     function test9(){var flag = false; var flagI = false;  flagI = false;  var channel = document.getElementById("txtchannel").value;if (channel == "") { flag = true; flagI = true;} var channel = Number(document.getElementById("txtchannel").value);if (isNaN(channel) || !Number.isInteger(channel)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("channel");if(flag){ resultadoInvalido(9); }else{ reactToAnswer(correct9(channel) != wrong9(channel),9,"channel: " +channel ); } }
      function correct9(channel){
        flag = channel>1 && channel<1000;
        flag = flag && channel%11 == 0
        return flag;
      }
      function wrong9(channel){
        flag = channel>1 && channel<1000;
        flag = channel%11 == 0
        return flag;
      }
     function test10(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(10); }else{ reactToAnswer(correct10( a,  b, c) != wrong10( a,  b, c),10,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct10(a, b, c){
      var maior = a;
      if(b > maior){
      maior = b;
      }
      if(c > maior){
      maior = c;
      } return maior;
      }
      function wrong10(a, b, c){
      if (a>b && a>c){
      return a;
      }else if(b>a && b>c){
      return b;
      }else{
      return c;
      }
      }
     function test11(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(11); }else{ reactToAnswer(correct11( a,  b, c) != wrong11( a,  b, c),11,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct11(a, b, c){
        count = 0;
        if(a%2 == 0){
          count++;
        }
        if(b%2 == 0){
          count++;
        }
        if(c%2 == 0){
          count++;
        }
        return count;
      }
      function wrong11(a, b, c){
        count = 0;
        if(a%2 == 0){
          count++;
        }else if(b % 2 == 0){
          count++;
        }else if(c % 2 == 0){
          count++;
        }
        return count;
      }
     function test12(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(12); }else{ reactToAnswer(correct12( a, b) != wrong12( a, b),12,"a: "+a+"; "+"b: " +b ); } }
      function correct12(a, b){
        if(a%2 == 1 || b%2 == 1) return 1;
        return 0;
      }
      function wrong12(a, b){
        if((a+b)%2 == 0){
          return 0;
        }else{
          return 1;
        }
      }      
     function test13(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(13); }else{ reactToAnswer(correct13( a,  b, c) != wrong13( a,  b, c),13,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct13(a, b, c){
        if(a == 0){
          if(b == 0 && c==0){
            return true;
          }
          return false;
        }
        return (b/a == c/b);
      }
      
      function wrong13(a, b, c){
        return (b/a == c/b);
      }
     function test14(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value; flagI = false;  var b = document.getElementById("txtb").value; flagI = false;  var c = document.getElementById("txtc").value;if(flag){ resultadoInvalido(14); }else{ reactToAnswer(correct14( a,  b, c) != wrong14( a,  b, c),14,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct14(a, b, c){
        count = 0;
        if(a == "cosmos") count++;
        if(b == "cosmos") count++;
        if(c == "cosmos") count++;
        return count;
      }
      function wrong14(a, b, c){
        if (a == "cosmos"){
          if (b == "cosmos"){
            if (c == "cosmos"){
              return 3;
            }else{
              return 2;
            }
          }else if(c == "cosmos"){
             return 2;
          }else{
            return 1;
          }
        }else{
          if (b == "cosmos"){
            return 1;
          }else if (c == "cosmos"){
            return 1;
          }else{
            return 0;
          }
        }
        return 0;
      }
     function test15(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true;  flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true;  flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true;  flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(15); }else{ reactToAnswer(correct15( a,  b, c) != wrong15( a,  b, c),15,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
      function correct15(a, b, c){
        //delta = 0;
        delta = (b*b)-4*a*c;
        if (delta<0){
          return null;
        }
        x = (-b-Math.sqrt(delta))/(2*a);
        return x;
     }
     function wrong15(a, b, c){
        //delta = 0;
        delta = (b*b)-4*a*c;
        if (delta<0){
          return null;
        }
        x = (-b-Math.sqrt(delta))/2*a;
        return x;
     }
     function test16(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(16); }else{ reactToAnswer(correct16( a, b) != wrong16( a, b),16,"a: "+a+"; "+"b: " +b ); } }
      function correct16(a, b){
      total = 1;
      for(i = 1; i<= b; i++){
      total = total*a;
      }
      return total;
      }
      function wrong16(a, b){
      total = a;
      for(i = 1; i<= b-1; i++){
      total = total*a;
      }
      return total;
      }
     function test17(){var flag = false; var flagI = false;  flagI = false;  var n = document.getElementById("txtn").value;if (n == "") { flag = true; flagI = true;} var n = Number(document.getElementById("txtn").value);if (isNaN(n) || !Number.isInteger(n)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("n");if(flag){ resultadoInvalido(17); }else{ reactToAnswer(correct17(n) != wrong17(n),17,"n: " +n ); } }
      function correct17(n){
        total = 1
        for (i=1; i<=n; i++){
          total = total*i
        }
        return total;
      }
      function wrong17(n){
        for (i=n-1; i>=1; i--){
          n = n*i;
        }
        return n;
      }
     function test18(){var flag = false; var flagI = false;  flagI = false;  var v = document.getElementById("txtv").value.split(" ");  for(i = 0; i < v.length; i++){  if(v[i] == " " || v[i] == ""){ flag = true;  flagI = true; break;} v[i] = Number(v[i]);  if(isNaN(v[i])) { flag = true;  flagI = true; break; } }  if(flagI == true) entradaInvalida("v");if(flag){ resultadoInvalido(18); }else{ reactToAnswer(correct18(v) != wrong18(v),18,"v: " +v ); } }
      function correct18(v){
        maior = v[0];
        for (i = 1; i < 5; i++){
          if (v[i]>maior){
            maior = v[i];
          }
        }
        return maior;
      }
      function wrong18(v){
        maior = 0;
        for (i = 0; i < 5; i++){
          if (v[i]>maior){
            maior = v[i];
          }
        }
        return maior;
      }
     function test19(){var flag = false; var flagI = false;  flagI = false;  var num = document.getElementById("txtnum").value;if (num == "") { flag = true; flagI = true;} var num = Number(document.getElementById("txtnum").value);if (isNaN(num) || !Number.isInteger(num)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("num");if(flag){ resultadoInvalido(19); }else{ reactToAnswer(correct19(num) != wrong19(num),19,"num: " +num ); } }
      function correct19(num){        
        if(num>1){
          for (i=2; i<=num/2; i++){
            if( num%i == 0 ){
              return false;
            }
          }
          return true;
        }
        return false;
      }
      function wrong19(num){        
        if(num>0){
          for (i=2; i<=num/2; i++){
            if( num%i == 0 ){
              return false;
            }
          }
          return true;
        }
        return false;
      }
    