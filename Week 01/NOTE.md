#学习笔记

1、三则运算符的使用 cell.innerHTML = pattern[i][j] == 2 ? "❌" :
                        pattern[i][j] == '1' ? "⭕" : "";
2、异步编程（callback、promise、async/await）

3、break 默认跳出里层循环，跳出指定循环得做标记
		//  这是break到最外面循环里面的

		outer:
		for(var i=0;i<10;i++){
		 inter:
		  for(var j=0;j<10;j++){
			if(i>5){
			console.log(i); ----6，7，8，9 
			 break outer;
			}
		  } 
		 }
4、基础得扎实，稳扎稳打，得有自己的前端架构，查漏补缺