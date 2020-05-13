var sectionNum = 1;
    function right(){
        if(sectionNum != 3){
            sectionNum += 1;
            changeSection(sectionNum, -1);
        }
        else{
            sectionNum = 1;
            changeSection(sectionNum, +2);
        }
    }
    function left(){
        if(sectionNum != 1){
            sectionNum -= 1;
            changeSection(sectionNum, +1);
        }
        else{
            sectionNum = 3;
            changeSection(sectionNum, -2);
        }
    }
    function changeSection(value, count){
        document.getElementById(`section${value + count}`).style.opacity = '0';
        document.getElementById(`section${value}`).style.opacity = '1';
        document.getElementById(`circle${value + count}`).style.background = 'transparent';
        document.getElementById(`circle${value}`).style.background = 'white';
    }