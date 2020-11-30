# 学习笔记

## 有限状态机

    1、trap 
    function end(){
        return end;
    }


    2、recomsume
    function FoundA(C){
        if(c=='b') {return FoundB;}
        else{
            return start(c);
        }
        
    }

