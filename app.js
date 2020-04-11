let size = 30;

const changeBalloon= (e) => {
  if(e.keyCode===73){
    size += 10;
    if(size > 60){
      document.getElementById("emoji").innerHTML = '<p style="font-size:60px">&#128165</p>';
      document.removeEventListener("keyup", changeBalloon);
    }
    else{document.getElementById("emoji").innerHTML =`<p style="font-size:${size}px">&#127880</p>`;}
  }
  else if(e.keyCode===68){
    size -= 10;
    if(size <= 0){
      document.getElementById("emoji").innerHTML = '<p>Done</p>';
      document.removeEventListener("keyup", changeBalloon);
    }
    else{document.getElementById("emoji").innerHTML =`<p style="font-size:${size}px">&#127880</p>`;}
  }
};

document.addEventListener("keyup", changeBalloon);



