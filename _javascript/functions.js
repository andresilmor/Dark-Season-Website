function fixAnimationQuote(){
    document.getElementById("id-text-bottom").style.top="90%"
    document.getElementById("id-text-top").style.top="-20%"
    document.getElementById("id-text-bottom").style.opacity="1";
}

function showM() {
    if(document.getElementById("id-menu").style.visibility == "visible")
    {
        document.getElementById("id-menu").style.visibility = "hidden";
        document.getElementById("id-arrow").style.transform = "rotate(360deg)";
    }
    else
    {
        document.getElementById("id-menu").style.visibility = "visible";
        document.getElementById("id-arrow").style.transform = "rotate(180deg)";
    }
  }

  function barSelected(c)
  {
      for(i = 1; i <= 5; i++)
      {
          var comp = "r" + i + "C";
          if(comp == c)
          {
            document.getElementById(c).style.background = "#fff";
            continue;
          }
          document.getElementById(comp).style.background = "transparent"; 
      }
  }

  function seeMore(btn, m, HH)
  {
      if(document.getElementById(m).style.display == "none")
      {
          document.getElementById(m).style.display = "inline";
          document.getElementById(btn).innerHTML = "See Less";
          document.getElementById(HH).style.color = "rgb(170, 26, 24)";
      }
      else
      {
          document.getElementById(m).style.display = "none";
          document.getElementById(btn).innerHTML = "See More";
          document.getElementById(HH).style.color = "rgb(224,224,224)";
      }
  }

  

  



