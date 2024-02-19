export const changeColor = (gender) =>{
    let colors="";
    if(gender==="male"){
       colors= "maleColors";
    }
    if(gender==="female"){
        colors = "femaleColors";
    }
    return colors;
}

export const changePicture = (gender) =>{
    let index=0;
    if(gender==="male"){
       index= 0;
    }
    if(gender==="female"){
        index = 1;
    }
    return index;
}