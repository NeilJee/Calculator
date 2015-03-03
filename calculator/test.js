/**
 * Created by Administrator on 2015/2/28.
 */
var firstString="";
var secondString="";
var operator="";
var firstNumber=0;
var secondNumber=0;
var result=0;
var show="0";
var isCal=0;

//初始化处理
function reset(){
    firstString = "";
    secondString="";
    operator = "";
    $(".opshow").text(operator);
    firstNumber = 0;
    secondNumber = 0;
    isCal=0;
    $(".screen").text(show);
}

//输入第一个运算符后处理
function firstOp(var1){
    if(firstString==""){firstString="0"};
    firstNumber=parseInt(firstString);
    isCal=1;
    operator=var1;
    $(".opshow").text(operator);
}

//输入第一个运算符后又更换运算符处理
function firstOpC(var1){
    firstNumber=parseInt(firstString);
    isCal=1;
    operator=var1;
    $(".opshow").text(operator);
}

//计算并显示结果函数
function calResult(var1){
    if(var1=="+"){
        result=firstNumber+secondNumber;
    }
    else if(var1=="-"){
        result=firstNumber-secondNumber;
    }
    else if(var1=="*"){
        result=firstNumber*secondNumber;
    }
    else if(var1=="/"){
        result=firstNumber/secondNumber;
    }
    $(".screen").text(result.toString());
}

//=号计算之后又输入其他运算符处理
function thirdEqualOp(var1){
    firstString=result.toString();
    firstNumber=result;
    secondString="";
    secondNumber = 0;
    isCal=1;
    operator=var1;
    $(".opshow").text(operator);
}


//计算完后继续计算，转入输入第一个运算符状态的处理函数
function calGoon(var1){
    operator=var1;
    isCal=1;
    firstString=result.toString();
    firstNumber=result;
    secondString="";
    secondNumber = 0;
}

//监控鼠标点击
$(".key").click(function(){
    var content=$(this).text()
    if(isCal==0) {
        if (content >= 0 || content <= 9) {
            firstString = firstString + content.toString();
            $(".screen").text(firstString);
        }
        else if (content == "+") {
            firstOp(content);
        }
        else if (content == "-") {
            firstOp(content);
        }
        else if (content == "*") {
            firstOp(content);
        }
        else if (content == "/") {
            firstOp(content);
        }
        else if (content == "=") {
        }
        else if (content == "C") {
            reset();
        }
    }
    else if(isCal==1) {
        if (content >= 0 || content <= 9) {
            isCal=2;
            secondString = secondString + content.toString();
            $(".screen").text(secondString);
        }
        else if (content == "+") {
            firstOpC(content);
        }
        else if (content == "-") {
            firstOpC(content);
        }
        else if (content == "*") {
            firstOpC(content);
        }
        else if (content == "/") {
            firstOpC(content);
        }
        else if (content == "=") {
        }
        else if (content == "C") {
            reset();
        }
    }
    else if(isCal==2) {
        if (content >= 0 || content <= 9) {
            secondString = secondString + content.toString();
            $(".screen").text(secondString);
        }
        else if (content == "+") {
            secondNumber=parseInt(secondString);
            $(".opshow").text(content);
            if(operator=="+")
            {
                calResult(operator);
                calGoon(content);

            }
            else if(operator=="-")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="*")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="/")
            {
                if(secondNumber==0)
                {
                   reset();
                    $(".screen").text("除数不能为0");
                }
                else{
                    calResult(operator);
                    calGoon(content);
                }

            }
        }
        else if (content == "-") {
            secondNumber=parseInt(secondString);
            $(".opshow").text(content);
            if(operator=="+")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="-")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="*")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="/")
            {
                if(secondNumber==0)
                {
                    reset();
                    $(".screen").text("除数不能为0");
                }
                else{
                    calResult(operator);
                    calGoon(content);
                }

            }
        }
        else if (content == "*") {
            secondNumber=parseInt(secondString);
            $(".opshow").text(content);
            if(operator=="+")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="-")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="*")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="/")
            {
                if(secondNumber==0)
                {
                    reset();
                    $(".screen").text("除数不能为0");
                }
                else{
                    calResult(operator);
                    calGoon(content);
                }

            }
        }
        else if (content == "/") {
            secondNumber=parseInt(secondString);
            $(".opshow").text(content);
            if(operator=="+")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="-")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="*")
            {
                calResult(operator);
                calGoon(content);
            }
            else if(operator=="/")
            {
                if(secondNumber==0)
                {
                    reset();
                    $(".screen").text("除数不能为0");

                }
                else{
                    calResult(operator);
                    calGoon(content);
                }

            }
        }
        else if (content == "=") {
            secondNumber=parseInt(secondString);
            $(".opshow").text("");
            if(operator=="+")
            {
                calResult(operator);
                isCal=3;
            }
            else if(operator=="-")
            {
                calResult(operator);
                isCal=3;
            }
            else if(operator=="*")
            {
                calResult(operator);
                isCal=3;
            }
            else if(operator=="/")
            {
                if(secondNumber==0)
                {
                    reset();
                    $(".screen").text("除数不能为0");
                }
                else{
                    calResult(operator);
                    isCal=3;
                }

            }
        }
        else if (content == "C") {
            reset();
        }
    }
    else if(isCal==3){
        if (content >= 0 || content <= 9) {
            reset();
            firstString = firstString + content.toString();
            $(".screen").text(firstString);
        }
        else if (content == "+") {
            thirdEqualOp(content);
        }
        else if (content == "-") {
            thirdEqualOp(content);
        }
        else if (content == "*") {
            thirdEqualOp(content);
        }
        else if (content == "/") {
            thirdEqualOp(content);
        }
        else if (content == "=") {
        }
        else if (content == "C") {
            reset();
        }
    }
})

//鼠标悬停在按钮上
    $(document).ready(function(){
        $(".key").hover(
            function(){
                $(this).css("background-color","#401E1B");
            },
            function(){
                $(this).css("background-color","#735246");
            })
    })

