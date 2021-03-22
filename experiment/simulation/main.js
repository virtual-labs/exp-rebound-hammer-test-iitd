function navNext1()

{
    document.getElementById("canvas1").style.visibility="hidden";

    document.getElementById("canvas2").style.visibility="visible"; 
}

function navNext2()

{
    document.getElementById("canvas2").style.visibility="hidden";

    document.getElementById("canvas3").style.visibility="visible"; 
}

function navNext3()

{
    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("canvas4").style.visibility="visible"; 
}

function navNext4()

{
    document.getElementById("canvas4").style.visibility="hidden";

    document.getElementById("canvas5").style.visibility="visible"; 
}

function navNext5()

{
    document.getElementById("canvas5").style.visibility="hidden";

    document.getElementById("canvas6").style.visibility="visible"; 
}

function navNext6()

{
    document.getElementById("canvas6").style.visibility="hidden";

    document.getElementById("canvas13").style.visibility="visible"; 
   
    	document.getElementById("can13scalepoint1").style.left ="394px";
		document.getElementById("can13scalepoint2").style.left ="394px";
		document.getElementById("can13scalepoint3").style.left ="264px";
		document.getElementById("can13scalepoint4").style.left ="425px";
		document.getElementById("can13scalepoint5").style.left ="410px";
		document.getElementById("can13scalepoint6").style.left ="410px";
    	
		document.getElementById("can13mp1").innerHTML ="32";
		document.getElementById("can13mp2").innerHTML ="32";
		document.getElementById("can13mp3").innerHTML ="20";
		document.getElementById("can13mp4").innerHTML ="35";
		document.getElementById("can13mp5").innerHTML ="34";
		document.getElementById("can13mp6").innerHTML ="34";

		document.getElementById("isbtn1").style.visibility="visible";
}

function navNext7()

{
    document.getElementById("canvas7").style.visibility="hidden";

    document.getElementById("canvas8").style.visibility="visible"; 
}

function navNext8()

{
    document.getElementById("canvas8").style.visibility="hidden";

    document.getElementById("canvas9").style.visibility="visible"; 
}

function navNext9()

{
    document.getElementById("canvas9").style.visibility="hidden";

    document.getElementById("canvas13").style.visibility="visible"; 

    	document.getElementById("can13scalepoint1").style.left ="330px";
		document.getElementById("can13scalepoint2").style.left ="337px";
		document.getElementById("can13scalepoint3").style.left ="337px";
		document.getElementById("can13scalepoint4").style.left ="330px";
		document.getElementById("can13scalepoint5").style.left ="358px";
		document.getElementById("can13scalepoint6").style.left ="460px";

		document.getElementById("can13mp1").innerHTML ="26";
		document.getElementById("can13mp2").innerHTML ="27";
		document.getElementById("can13mp3").innerHTML ="27";
		document.getElementById("can13mp4").innerHTML ="26";
		document.getElementById("can13mp5").innerHTML ="28";
		document.getElementById("can13mp6").innerHTML ="38";    

		document.getElementById("isbtn2").style.visibility="visible";
}

function navNext10()

{
    document.getElementById("canvas10").style.visibility="hidden";

    document.getElementById("canvas11").style.visibility="visible"; 
}

function navNext11()

{
    document.getElementById("canvas11").style.visibility="hidden";

    document.getElementById("canvas12").style.visibility="visible"; 
}

function navNext12()

{
    document.getElementById("canvas12").style.visibility="hidden";

    document.getElementById("canvas13").style.visibility="visible";

    	document.getElementById("can13scalepoint1").style.left ="235px";
		document.getElementById("can13scalepoint2").style.left ="392px";
		document.getElementById("can13scalepoint3").style.left ="373px";
		document.getElementById("can13scalepoint4").style.left ="365px";
		document.getElementById("can13scalepoint5").style.left ="373px";
		document.getElementById("can13scalepoint6").style.left ="360px";

		document.getElementById("can13mp1").innerHTML ="16";
		document.getElementById("can13mp2").innerHTML ="32";
		document.getElementById("can13mp3").innerHTML ="30";
		document.getElementById("can13mp4").innerHTML ="29";
		document.getElementById("can13mp5").innerHTML ="30";
		document.getElementById("can13mp6").innerHTML ="28";

		document.getElementById("isbtn3").style.visibility="visible";
}

function navNext13()

{
    document.getElementById("canvas13").style.visibility="hidden";

    document.getElementById("canvas14").style.visibility="visible";

    	
}




function navNext14()

{
    document.getElementById("canvas13").style.visibility="hidden";

    document.getElementById("canvas15").style.visibility="visible"; 

    	document.getElementById("ri11").innerHTML =a1;
		document.getElementById("ri22").innerHTML =a2;
		document.getElementById("ri33").innerHTML =a3;
		document.getElementById("ri44").innerHTML =a4;
		document.getElementById("ri55").innerHTML =a5;
		document.getElementById("ri66").innerHTML =a6;

if (index1 == "aierh" && index2 == "2.25")
 {
 	if (case1 == "hu") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically up";
 	} 
 	else if (case1 == "hd") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically down";
 	}
 	else if (case1 == "v") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Horizontal";
 	}
 	else
 	{
 	
 	}
 } 
 else if (index1 == "lwcsircp" && index2 == "0.75")
 {
  	if (case1 == "hu") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically up";
 	} 
 	else if (case1 == "hd") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically down";
 	}
 	else if (case1 == "v") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Horizontal";
 	}
 	else
 	{
 	
 	}     
 }
 else if (index1 == "mctrhsp" && index2 == "30.00")
 {
  	if (case1 == "hu") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically up";
 	} 
 	else if (case1 == "hd") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Vertically down";
 	}
 	else if (case1 == "v") 
 	{
 		document.getElementById("ie2").innerHTML =index2;
 		document.getElementById("fo2").innerHTML ="Horizontal";
 	}
 	else
 	{
 	
 	}   
 }
else 
{
    alert("selectcase");
}
}

var gavg = 0;

function rem1()
{
    document.getElementById("ri11").style.textDecoration = "line-through";
    document.getElementById("ri11").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 31;
    } 
    else if (case1 == "hd") 
    {
        gavg = 29.2;
    }
    else if (case1 == "v") 
    {
        gavg = 29.8;
    }
    else
    {
    
    }

    document.getElementById("avgrem").innerHTML = gavg;
    // alert("hello");

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";


}

function rem2()
{
    document.getElementById("ri22").style.textDecoration = "line-through";
    document.getElementById("ri22").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 31;
    } 
    else if (case1 == "hd") 
    {
        gavg = 29;
    }
    else if (case1 == "v") 
    {
        gavg = 26.6;
    }
    else
    {
    
    }
    document.getElementById("avgrem").innerHTML = gavg; 

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";
}

function rem3()
{
    document.getElementById("ri33").style.textDecoration = "line-through";
    document.getElementById("ri33").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 33.4;
    } 
    else if (case1 == "hd") 
    {
        gavg = 29;
    }
    else if (case1 == "v") 
    {
        gavg = 27;
    }
    else
    {
    
    }
    document.getElementById("avgrem").innerHTML = gavg;

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";
}

function rem4()
{
    document.getElementById("ri44").style.textDecoration = "line-through";
    document.getElementById("ri44").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 30.4;
    } 
    else if (case1 == "hd") 
    {
        gavg = 29.2;
    }
    else if (case1 == "v") 
    {
        gavg = 27.2;
    }
    else
    {
    
    }
    document.getElementById("avgrem").innerHTML = gavg;

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";
}

function rem5()
{
    document.getElementById("ri55").style.textDecoration = "line-through";
    document.getElementById("ri55").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 30.6;
    } 
    else if (case1 == "hd") 
    {
        gavg = 28.8;
    }
    else if (case1 == "v") 
    {
        gavg = 27;
    }
    else
    {
    
    }
    document.getElementById("avgrem").innerHTML = gavg;

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";
}

function rem6()
{
    document.getElementById("ri66").style.textDecoration = "line-through";
    document.getElementById("ri66").style.color ="red";
    if (case1 == "hu") 
    {
        gavg = 30.6;
    } 
    else if (case1 == "hd") 
    {
        gavg = 26.8;
    }
    else if (case1 == "v") 
    {
        gavg = 27.4;
    }
    else
    {
    
    }
    document.getElementById("avgrem").innerHTML = gavg;

    document.getElementById("stepd15a").style.visibility="hidden";    
    document.getElementById("stepd15b").style.visibility="visible";

    document.getElementById("remsub1").style.visibility="hidden";
    document.getElementById("remsub2").style.visibility="hidden";
    document.getElementById("remsub3").style.visibility="hidden";
    document.getElementById("remsub4").style.visibility="hidden";
    document.getElementById("remsub5").style.visibility="hidden";
    document.getElementById("remsub6").style.visibility="hidden";
    document.getElementById("submitrep1").style.visibility="visible";
}






function navNext15()

{
    document.getElementById("canvas15").style.visibility="hidden";

    document.getElementById("canvas16").style.visibility="visible";

    document.getElementById("repavg").innerHTML = gavg;
    document.getElementById("csrep").innerHTML = "27";

    if (index1 == "aierh" && index2 == "2.25")
 {
    if (case1 == "hu") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }
 } 
 else if (index1 == "lwcsircp" && index2 == "0.75")
 {
    if (case1 == "hu") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }     
 }
 else if (index1 == "mctrhsp" && index2 == "30.00")
 {
    if (case1 == "hu") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("rie1").innerHTML =index2;
        document.getElementById("rfo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }   
 }
else 
{
    alert("selectcase");
}
}


function navNext16()

{
    document.getElementById("canvas16").style.visibility="hidden";

    document.getElementById("canvas17").style.visibility="visible"; 

        document.getElementById("ri1").innerHTML =a1;
        document.getElementById("ri2").innerHTML =a2;
        document.getElementById("ri3").innerHTML =a3;
        document.getElementById("ri4").innerHTML =a4;
        document.getElementById("ri5").innerHTML =a5;
        document.getElementById("ri6").innerHTML =a6;

if (index1 == "aierh" && index2 == "2.25")
 {
    if (case1 == "hu") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }
 } 
 else if (index1 == "lwcsircp" && index2 == "0.75")
 {
    if (case1 == "hu") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }     
 }
 else if (index1 == "mctrhsp" && index2 == "30.00")
 {
    if (case1 == "hu") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically up";
    } 
    else if (case1 == "hd") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Vertically down";
    }
    else if (case1 == "v") 
    {
        document.getElementById("ie1").innerHTML =index2;
        document.getElementById("fo1").innerHTML ="Horizontal";
    }
    else
    {
    
    }   
 }
else 
{
    alert("selectcase");
}

}


var index1 ;
var index2 = 0;

function selectindex()
{
    index1 = document.getElementById("appIn").value;
    index2 = document.getElementById("appIn2").value;

if (index1 == "aierh" && index2 == "2.25")
 {
    document.getElementById("appIn2").style.border ="2px solid green";
    document.getElementById("outtext1").innerHTML = "&nbsp;";
    document.getElementById("barrownext1").style.visibility="visible";

    document.getElementById("handarrow1").style.visibility="visible";
 } 
 else if (index1 == "lwcsircp" && index2 == "0.75")
 {
    document.getElementById("appIn2").style.border ="2px solid green";
    document.getElementById("outtext1").innerHTML = "&nbsp;";
    document.getElementById("barrownext1").style.visibility="visible";

    document.getElementById("handarrow1").style.visibility="visible";  
 }
 else if (index1 == "mctrhsp" && index2 == "30.00")
 {
    document.getElementById("appIn2").style.border ="2px solid green";
    document.getElementById("outtext1").innerHTML = "&nbsp;";
    document.getElementById("barrownext1").style.visibility="visible";

    document.getElementById("handarrow1").style.visibility="visible";
 }
else 
{
    // alert("selectcase");
    if (index1 == "") 
    {
    document.getElementById("appIn").style.border ="2px solid red";
    }
    if (index1 == "aierh" || index1 == "lwcsircp" || index1 == "mctrhsp") 
    {
    document.getElementById("appIn").style.border ="2px solid green";
    }

    document.getElementById("appIn2").style.border ="2px solid red";
    document.getElementById("outtext1").innerHTML = "For testing normal weight concrete = 2.25<br><br>For testing light-weight concrete or small and impact sensitive part of concrete = 0.75<br><br>For testing mass concrete, for examples in roads, air- fields pavements and hydraulic structures = 30.00"; 
}

// document.getElementById("ind2").style.border ="2px solid red";
}
 

var case1 = 0;

function selectcase()
{
    case1 = document.getElementById("CaseIn").value;

if (case1 == "hu")
 {
    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("canvas4").style.visibility="visible";
 } 
 else if (case1 == "v")
 {
    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("canvas7").style.visibility="visible";  
 }
 else if (case1 == "hd")
 {
    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("canvas10").style.visibility="visible";
 }
else 
{
    alert("selectcase");
}

}



function addstoneups1()
{
    document.getElementById("barrowaddups11").style.visibility="hidden";
    document.getElementById("addbtnups11").style.visibility="hidden";
    document.getElementById("stoneups1").style.visibility="visible";
    document.getElementById("barrowstoneups1").style.visibility="visible";
    document.getElementById("stepup1a").style.visibility="hidden";
    document.getElementById("stepup1b").style.visibility="visible"; 
}

function usestoneups1()
{
    document.getElementById("barrowstoneups1").style.visibility="hidden";
    document.getElementById("stoneups1").style.visibility="hidden";
    document.getElementById("stonehandups1").style.visibility="visible";
    document.getElementById("stonehandups1").style.animation="usestoneups11 4s forwards";
setTimeout(function()
        {
    $("#scretch1").delay(500).fadeIn(2000);
 },2000);
        setTimeout(function()
        {
            // document.getElementById("scretch1").style.visibility="visible";
            document.getElementById("stonehandups1").style.visibility="hidden";
            document.getElementById("markerups11").style.visibility="visible";
            document.getElementById("barrowmarkerups11").style.visibility="visible";
            document.getElementById("stepup1b").style.visibility="hidden";
            document.getElementById("stepup1bn").style.visibility="hidden";
            document.getElementById("transwhite3").style.visibility="hidden";
            document.getElementById("transwhite2").style.visibility="visible";
            document.getElementById("stepup1c").style.visibility="visible";
            document.getElementById("stepup1d").style.visibility="visible";
        },4000);
}

function usemarkercond11()
{
    document.getElementById("barrowmarkerups11").style.visibility="hidden";
    document.getElementById("markerups11").style.visibility="hidden";
    document.getElementById("handmarkerups11").style.visibility="visible";
    document.getElementById("handmarkerups11").style.animation="usemarkerups11a 1s forwards";
    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups11b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups11").style.visibility="visible"; 
            },1000);
    },1000);
    
    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups12b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups12").style.visibility="visible";
            },1000);
    },2000);

    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups13b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups13").style.visibility="visible";
            },1000);
    },3000);

    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups14b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups14").style.visibility="visible";
            },1000);
    },4000);

    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups15b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups15").style.visibility="visible";
            },1000);
    },5000);

    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups16b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointups16").style.visibility="visible";
               document.getElementById("handmarkerups11").style.visibility="hidden";
               document.getElementById("barrownextups1").style.visibility="visible";
               document.getElementById("handarrowups1").style.visibility="visible";
            },1000);
    },6000);
}




function usemarkercond12()
{
    document.getElementById("barrowmarkervs11").style.visibility="hidden";
    document.getElementById("markervs11").style.visibility="hidden";
    document.getElementById("handmarkervs11").style.visibility="visible";
    document.getElementById("handmarkervs11").style.animation="usemarkervs11a 1s forwards";
    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs11b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs11").style.visibility="visible"; 
            },1000);
    },1000);
    
    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs12b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs12").style.visibility="visible";
            },1000);
    },2000);

    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs13b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs13").style.visibility="visible";
            },1000);
    },3000);

    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs14b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs14").style.visibility="visible";
            },1000);
    },4000);

    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs15b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs15").style.visibility="visible";
            },1000);
    },5000);

    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs16b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointvs16").style.visibility="visible";
               document.getElementById("handmarkervs11").style.visibility="hidden";
               document.getElementById("barrownextvs1").style.visibility="visible";
               document.getElementById("handarrowvs1").style.visibility="visible";
            },1000);
    },6000);
}



function usemarkercond13()
{
    document.getElementById("barrowmarkerds11").style.visibility="hidden";
    document.getElementById("markerds11").style.visibility="hidden";
    document.getElementById("handmarkerds11").style.visibility="visible";
    document.getElementById("handmarkerds11").style.animation="usemarkerds11a 1s forwards";
    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds11b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds11").style.visibility="visible"; 
            },1000);
    },1000);
    
    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds12b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds12").style.visibility="visible";
            },1000);
    },2000);

    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds13b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds13").style.visibility="visible";
            },1000);
    },3000);

    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds14b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds14").style.visibility="visible";
            },1000);
    },4000);

    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds15b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds15").style.visibility="visible";
            },1000);
    },5000);

    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds16b 1s forwards";
        
            setTimeout(function()
            {
               document.getElementById("pointds16").style.visibility="visible";
               document.getElementById("handmarkerds11").style.visibility="hidden";
               document.getElementById("barrownextds1").style.visibility="visible";
               document.getElementById("handarrowds1").style.visibility="visible";
            },1000);
    },6000);
}









function usemarkerups11()
{
    document.getElementById("barrowmarkerups11").style.visibility="hidden";
    document.getElementById("markerups11").style.visibility="hidden";
    document.getElementById("handmarkerups11").style.visibility="visible";
    document.getElementById("handmarkerups11").style.animation="usemarkerups11a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups11").style.animation="usemarkerups11b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups11").style.visibility="visible";
            // document.getElementById("handmarkerups11").style.animation="usemarkerups11c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups11").style.visibility="hidden";
                document.getElementById("markerups12").style.visibility="visible";
                document.getElementById("barrowmarkerups12").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerups12()
{
    document.getElementById("barrowmarkerups12").style.visibility="hidden";
    document.getElementById("markerups12").style.visibility="hidden";
    document.getElementById("handmarkerups12").style.visibility="visible";
    document.getElementById("handmarkerups12").style.animation="usemarkerups12a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups12").style.animation="usemarkerups12b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups12").style.visibility="visible";
            document.getElementById("handmarkerups12").style.animation="usemarkerups12c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups12").style.visibility="hidden";
                document.getElementById("markerups13").style.visibility="visible";
                document.getElementById("barrowmarkerups13").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerups13()
{
    document.getElementById("barrowmarkerups13").style.visibility="hidden";
    document.getElementById("markerups13").style.visibility="hidden";
    document.getElementById("handmarkerups13").style.visibility="visible";
    document.getElementById("handmarkerups13").style.animation="usemarkerups13a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups13").style.animation="usemarkerups13b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups13").style.visibility="visible";
            document.getElementById("handmarkerups13").style.animation="usemarkerups13c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups13").style.visibility="hidden";
                document.getElementById("markerups14").style.visibility="visible";
                document.getElementById("barrowmarkerups14").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerups14()
{
    document.getElementById("barrowmarkerups14").style.visibility="hidden";
    document.getElementById("markerups14").style.visibility="hidden";
    document.getElementById("handmarkerups14").style.visibility="visible";
    document.getElementById("handmarkerups14").style.animation="usemarkerups14a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups14").style.animation="usemarkerups14b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups14").style.visibility="visible";
            document.getElementById("handmarkerups14").style.animation="usemarkerups14c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups14").style.visibility="hidden";
                document.getElementById("markerups15").style.visibility="visible";
                document.getElementById("barrowmarkerups15").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerups15()
{
    document.getElementById("barrowmarkerups15").style.visibility="hidden";
    document.getElementById("markerups15").style.visibility="hidden";
    document.getElementById("handmarkerups15").style.visibility="visible";
    document.getElementById("handmarkerups15").style.animation="usemarkerups15a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups15").style.animation="usemarkerups15b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups15").style.visibility="visible";
            document.getElementById("handmarkerups15").style.animation="usemarkerups15c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups15").style.visibility="hidden";
                document.getElementById("markerups16").style.visibility="visible";
                document.getElementById("barrowmarkerups16").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerups16()
{
    document.getElementById("barrowmarkerups16").style.visibility="hidden";
    document.getElementById("markerups16").style.visibility="hidden";
    document.getElementById("handmarkerups16").style.visibility="visible";
    document.getElementById("handmarkerups16").style.animation="usemarkerups16a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerups16").style.animation="usemarkerups16b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointups16").style.visibility="visible";
            document.getElementById("handmarkerups16").style.animation="usemarkerups16c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerups16").style.visibility="hidden";
                document.getElementById("barrownextups1").style.visibility="visible";
                document.getElementById("handarrowups1").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function addhammerups2()
{
    document.getElementById("barrowaddups21").style.visibility="hidden";
    document.getElementById("addbtnups21").style.visibility="hidden";
    document.getElementById("hammerups21").style.visibility="visible";
    document.getElementById("barrowhammerups21").style.visibility="visible";
    document.getElementById("stepup2a").style.visibility="hidden";
    document.getElementById("stepup2b").style.visibility="visible"; 
}


/*horizontal upword point 1*/

function usehammerups21()
{
    document.getElementById("barrowhammerups21").style.visibility="hidden";

    document.getElementById("hammerups21").style.visibility="hidden";
    
    document.getElementById("hammer_hand21").style.visibility="visible";
    
    document.getElementById("hammer_hand21").style.animation="usehammerups211 3s forwards";
//     setTimeout(function()
//         {
// document.getElementById("hammer_hand21").style.visibility="hidden";
//         },3000);

setTimeout(function()
        {
            document.getElementById("hammer_hand21").style.visibility="hidden";
            document.getElementById("hammer_pin21").style.visibility="visible";
            document.getElementById("hammer_hand_push21").style.visibility="visible";
            document.getElementById("hammer_hand_push21").style.animation="usehammerupshand211 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21").style.visibility="visible";
            document.getElementById("barrowbuttonups21").style.visibility="visible";
            document.getElementById("stepup2b").style.visibility="hidden";
            document.getElementById("stepup2c").style.visibility="visible";
        },3100);
}

function buttonups21()
{
    document.getElementById("transboxrups21").style.visibility="hidden";
    document.getElementById("barrowbuttonups21").style.visibility="hidden";
    document.getElementById("scaleups21").style.visibility="visible";
    document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint1").style.animation="hammermeter_1 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerups21").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint1").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepup2c").style.visibility="hidden";
            document.getElementById("stepup2d").style.visibility="visible";
            
            document.getElementById("hammer_pin21").style.visibility="hidden";
            
            document.getElementById("hammer_hand_push21").style.visibility="hidden";
            document.getElementById("hammerups21p2").style.visibility="visible";
            document.getElementById("scalepoint2").style.visibility="visible";
            document.getElementById("barrowhammerups21p2").style.visibility="visible";
        },3000);
}

/*=========*/


/*horizontal upword point 2*/

function usehammerups31()
{
    document.getElementById("barrowhammerups21p2").style.visibility="hidden";

    document.getElementById("hammerups21p2").style.visibility="hidden";
    
    document.getElementById("hammer_hand21p2").style.visibility="visible";
    
    document.getElementById("hammer_hand21p2").style.animation="usehammerups311 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_hand21p2").style.visibility="hidden";
            document.getElementById("hammer_pin21p2").style.visibility="visible";
            document.getElementById("hammer_hand_push21p2").style.visibility="visible";
            document.getElementById("hammer_hand_push21p2").style.animation="usehammerupshand311 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21p2").style.visibility="visible";
            document.getElementById("barrowbuttonups21p2").style.visibility="visible";
            document.getElementById("stepup2d").style.visibility="hidden";
            document.getElementById("stepup2e").style.visibility="visible";
        },3100);
}

function buttonups31()
{
    document.getElementById("transboxrups21p2").style.visibility="hidden";
    document.getElementById("barrowbuttonups21p2").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint2").style.animation="hammermeter_2 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammer_hand_push21p2").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint2").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepup2e").style.visibility="hidden";
            document.getElementById("stepup2f").style.visibility="visible";
            
            document.getElementById("hammer_pin21p2").style.visibility="hidden";
            
            document.getElementById("hammer_hand_push21p2").style.visibility="hidden";
            document.getElementById("hammerups21p3").style.visibility="visible";
            document.getElementById("scalepoint3").style.visibility="visible";
            document.getElementById("barrowhammerups21p3").style.visibility="visible";
        },3000);
}

/*=========*/


/*horizontal upword point 3*/

function usehammerups41()
{
    document.getElementById("barrowhammerups21p3").style.visibility="hidden";

    document.getElementById("hammerups21p3").style.visibility="hidden";
    
    document.getElementById("hammer_hand21p3").style.visibility="visible";
    
    document.getElementById("hammer_hand21p3").style.animation="usehammerups411 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_hand21p3").style.visibility="hidden";
            document.getElementById("hammer_pin21p3").style.visibility="visible";
            document.getElementById("hammer_hand_push21p3").style.visibility="visible";
            document.getElementById("hammer_hand_push21p3").style.animation="usehammerupshand411 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21p3").style.visibility="visible";
            document.getElementById("barrowbuttonups21p3").style.visibility="visible";
            document.getElementById("stepup2f").style.visibility="hidden";
            document.getElementById("stepup2g").style.visibility="visible";
        },3100);
}

function buttonups41()
{
    document.getElementById("transboxrups21p3").style.visibility="hidden";
    document.getElementById("barrowbuttonups21p3").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint3").style.animation="hammermeter_3 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerups21p3").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint3").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepup2g").style.visibility="hidden";
            document.getElementById("stepup2h").style.visibility="visible";
            
            document.getElementById("hammer_pin21p3").style.visibility="hidden";
            
            document.getElementById("hammer_hand_push21p3").style.visibility="hidden";
            document.getElementById("hammerups21p4").style.visibility="visible";
            document.getElementById("scalepoint4").style.visibility="visible";
            document.getElementById("barrowhammerups21p4").style.visibility="visible";
        },3000);
}

/*=========*/


/*horizontal upword point 4*/

function usehammerups51()
{
    document.getElementById("barrowhammerups21p4").style.visibility="hidden";

    document.getElementById("hammerups21p4").style.visibility="hidden";
    
    document.getElementById("hammer_hand21p4").style.visibility="visible";
    
    document.getElementById("hammer_hand21p4").style.animation="usehammerups511 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_hand21p4").style.visibility="hidden";
            document.getElementById("hammer_pin21p4").style.visibility="visible";
            document.getElementById("hammer_hand_push21p4").style.visibility="visible";
            document.getElementById("hammer_hand_push21p4").style.animation="usehammerupshand511 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21p4").style.visibility="visible";
            
            document.getElementById("barrowbuttonups21p4").style.visibility="visible";
            document.getElementById("stepup2h").style.visibility="hidden";
            document.getElementById("stepup2i").style.visibility="visible";
        },3100);
}

function buttonups51()
{
    document.getElementById("transboxrups21p4").style.visibility="hidden";
    document.getElementById("barrowbuttonups21p4").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint4").style.animation="hammermeter_4 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerups21p4").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint4").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepup2i").style.visibility="hidden";
            document.getElementById("stepup2j").style.visibility="visible";

            document.getElementById("hammer_pin21p4").style.visibility="hidden";

            document.getElementById("hammer_hand_push21p4").style.visibility="hidden";
            document.getElementById("hammerups21p5").style.visibility="visible";
            document.getElementById("scalepoint5").style.visibility="visible";
            document.getElementById("barrowhammerups21p5").style.visibility="visible";
        },3000);
}

/*=========*/



/*horizontal upword point 5*/

function usehammerups61()
{
    document.getElementById("barrowhammerups21p5").style.visibility="hidden";

    document.getElementById("hammerups21p5").style.visibility="hidden";
    
    document.getElementById("hammer_hand21p5").style.visibility="visible";
    
    document.getElementById("hammer_hand21p5").style.animation="usehammerups611 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_hand21p5").style.visibility="hidden";
            document.getElementById("hammer_pin21p5").style.visibility="visible";
            document.getElementById("hammer_hand_push21p5").style.visibility="visible";
            document.getElementById("hammer_hand_push21p5").style.animation="usehammerupshand611 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21p5").style.visibility="visible";
            document.getElementById("barrowbuttonups21p5").style.visibility="visible";
            document.getElementById("stepup2j").style.visibility="hidden";
            document.getElementById("stepup2k").style.visibility="visible";
        },3100);
}

function buttonups61()
{
    document.getElementById("transboxrups21p5").style.visibility="hidden";
    document.getElementById("barrowbuttonups21p5").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint5").style.animation="hammermeter_5 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerups21p5").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint5").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepup2k").style.visibility="hidden";
            document.getElementById("stepup2l").style.visibility="visible";
            
            document.getElementById("hammer_pin21p5").style.visibility="hidden";
            
            document.getElementById("hammer_hand_push21p5").style.visibility="hidden";
            document.getElementById("hammerups21p6").style.visibility="visible";
            document.getElementById("scalepoint6").style.visibility="visible";
            document.getElementById("barrowhammerups21p6").style.visibility="visible";
        },3000);
}

/*=========*/


/*horizontal upword point 6*/

function usehammerups71()
{
    document.getElementById("barrowhammerups21p6").style.visibility="hidden";

    document.getElementById("hammerups21p6").style.visibility="hidden";
    
    document.getElementById("hammer_hand21p6").style.visibility="visible";
    
    document.getElementById("hammer_hand21p6").style.animation="usehammerups711 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_hand21p6").style.visibility="hidden";
            document.getElementById("hammer_pin21p6").style.visibility="visible";
            document.getElementById("hammer_hand_push21p6").style.visibility="visible";
            document.getElementById("hammer_hand_push21p6").style.animation="usehammerupshand711 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrups21p6").style.visibility="visible";
            document.getElementById("barrowbuttonups21p6").style.visibility="visible";
            document.getElementById("stepup2l").style.visibility="hidden";
            document.getElementById("stepup2m").style.visibility="visible";
        },3100);
}

function buttonups71()
{
    document.getElementById("transboxrups21p6").style.visibility="hidden";
    document.getElementById("barrowbuttonups21p6").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepoint6").style.animation="hammermeter_6 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerups21p6").style.visibility="hidden";
            document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepoint6").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            // document.getElementById("stepup2m").style.visibility="hidden";
            // document.getElementById("stepup2n").style.visibility="visible";
            
            document.getElementById("hammer_pin21p6").style.visibility="hidden";
            
            document.getElementById("hammer_hand_push21p6").style.visibility="hidden";
            // document.getElementById("hammerups21p6").style.visibility="visible";
            document.getElementById("barrownextups2").style.visibility="visible";
            document.getElementById("handarrowups2").style.visibility="visible";
        },3000);
}

/*=========*/



/*Vertical point 1*/

function usehammervs21()
{
    document.getElementById("barrowhammervs21").style.visibility="hidden";

    document.getElementById("hammervs21").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21").style.visibility="visible";
    
    document.getElementById("hammer_handvs21").style.animation="usehammervs211 3s forwards";
//     setTimeout(function()
//         {
// document.getElementById("hammer_hand21").style.visibility="hidden";
//         },3000);

setTimeout(function()
        {
            document.getElementById("hammer_handvs21").style.visibility="hidden";
            document.getElementById("hammer_pinvs21").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21").style.animation="usehammervshand211 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21").style.visibility="visible";
            document.getElementById("barrowbuttonvs21").style.visibility="visible";
            document.getElementById("stepv2b").style.visibility="hidden";
            document.getElementById("stepv2c").style.visibility="visible";
        },3100);
}

function buttonvs21()
{
    document.getElementById("transboxrvs21").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21").style.visibility="hidden";
    document.getElementById("scalevs21").style.visibility="visible";
    document.getElementById("scalepointvs1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs1").style.animation="hammermetervs_1 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammervs21").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointvs1").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepv2c").style.visibility="hidden";
            document.getElementById("stepv2d").style.visibility="visible";
            
            document.getElementById("hammer_pinvs21").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushvs21").style.visibility="hidden";
            document.getElementById("hammervs21p2").style.visibility="visible";
            document.getElementById("scalepointvs2").style.visibility="visible";
            document.getElementById("barrowhammervs21p2").style.visibility="visible";
        },3000);
}

/*=========*/


/*Vertical point 2*/

function usehammervs31()
{
    document.getElementById("barrowhammervs21p2").style.visibility="hidden";

    document.getElementById("hammervs21p2").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21p2").style.visibility="visible";
    
    document.getElementById("hammer_handvs21p2").style.animation="usehammervs311 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handvs21p2").style.visibility="hidden";
            document.getElementById("hammer_pinvs21p2").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p2").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p2").style.animation="usehammervshand311 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21p2").style.visibility="visible";
            document.getElementById("barrowbuttonvs21p2").style.visibility="visible";
            document.getElementById("stepv2d").style.visibility="hidden";
            document.getElementById("stepv2e").style.visibility="visible";
        },3100);
}

function buttonvs31()
{
    document.getElementById("transboxrvs21p2").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21p2").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs2").style.animation="hammermetervs_2 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammer_hand_pushvs21p2").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointvs2").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepv2e").style.visibility="hidden";
            document.getElementById("stepv2f").style.visibility="visible";
            
            document.getElementById("hammer_pinvs21p2").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushvs21p2").style.visibility="hidden";
            document.getElementById("hammervs21p3").style.visibility="visible";
            document.getElementById("scalepointvs3").style.visibility="visible";
            document.getElementById("barrowhammervs21p3").style.visibility="visible";
        },3000);
}

/*=========*/


/*Vertical point 3*/

function usehammervs41()
{
    document.getElementById("barrowhammervs21p3").style.visibility="hidden";

    document.getElementById("hammervs21p3").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21p3").style.visibility="visible";
    
    document.getElementById("hammer_handvs21p3").style.animation="usehammervs411 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handvs21p3").style.visibility="hidden";
            document.getElementById("hammer_pinvs21p3").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p3").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p3").style.animation="usehammervshand411 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21p3").style.visibility="visible";
            document.getElementById("barrowbuttonvs21p3").style.visibility="visible";
            document.getElementById("stepv2f").style.visibility="hidden";
            document.getElementById("stepv2g").style.visibility="visible";
        },3100);
}

function buttonvs41()
{
    document.getElementById("transboxrvs21p3").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21p3").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs3").style.animation="hammermetervs_3 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammervs21p3").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointvs3").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepv2g").style.visibility="hidden";
            document.getElementById("stepv2h").style.visibility="visible";
            
            document.getElementById("hammer_pinvs21p3").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushvs21p3").style.visibility="hidden";
            document.getElementById("hammervs21p4").style.visibility="visible";
            document.getElementById("scalepointvs4").style.visibility="visible";
            document.getElementById("barrowhammervs21p4").style.visibility="visible";
        },3000);
}

/*=========*/


/*Vertical point 4*/

function usehammervs51()
{
    document.getElementById("barrowhammervs21p4").style.visibility="hidden";

    document.getElementById("hammervs21p4").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21p4").style.visibility="visible";
    
    document.getElementById("hammer_handvs21p4").style.animation="usehammervs511 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handvs21p4").style.visibility="hidden";
            document.getElementById("hammer_pinvs21p4").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p4").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p4").style.animation="usehammervshand511 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21p4").style.visibility="visible";
            
            document.getElementById("barrowbuttonvs21p4").style.visibility="visible";
            document.getElementById("stepv2h").style.visibility="hidden";
            document.getElementById("stepv2i").style.visibility="visible";
        },3100);
}

function buttonvs51()
{
    document.getElementById("transboxrvs21p4").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21p4").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs4").style.animation="hammermetervs_4 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammervs21p4").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointvs4").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepv2i").style.visibility="hidden";
            document.getElementById("stepv2j").style.visibility="visible";

            document.getElementById("hammer_pinvs21p4").style.visibility="hidden";

            document.getElementById("hammer_hand_pushvs21p4").style.visibility="hidden";
            document.getElementById("hammervs21p5").style.visibility="visible";
            document.getElementById("scalepointvs5").style.visibility="visible";
            document.getElementById("barrowhammervs21p5").style.visibility="visible";
        },3000);
}

/*=========*/



/*Vertical point 5*/

function usehammervs61()
{
    document.getElementById("barrowhammervs21p5").style.visibility="hidden";

    document.getElementById("hammervs21p5").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21p5").style.visibility="visible";
    
    document.getElementById("hammer_handvs21p5").style.animation="usehammervs611 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handvs21p5").style.visibility="hidden";
            document.getElementById("hammer_pinvs21p5").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p5").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p5").style.animation="usehammervshand611 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21p5").style.visibility="visible";
            document.getElementById("barrowbuttonvs21p5").style.visibility="visible";
            document.getElementById("stepv2j").style.visibility="hidden";
            document.getElementById("stepv2k").style.visibility="visible";
        },3100);
}

function buttonvs61()
{
    document.getElementById("transboxrvs21p5").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21p5").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs5").style.animation="hammermetervs_5 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammervs21p5").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointvs5").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepv2k").style.visibility="hidden";
            document.getElementById("stepv2l").style.visibility="visible";
            
            document.getElementById("hammer_pinvs21p5").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushvs21p5").style.visibility="hidden";
            document.getElementById("hammervs21p6").style.visibility="visible";
            document.getElementById("scalepointvs6").style.visibility="visible";
            document.getElementById("barrowhammervs21p6").style.visibility="visible";
        },3000);
}

/*=========*/


/*Vertical point 6*/

function usehammervs71()
{
    document.getElementById("barrowhammervs21p6").style.visibility="hidden";

    document.getElementById("hammervs21p6").style.visibility="hidden";
    
    document.getElementById("hammer_handvs21p6").style.visibility="visible";
    
    document.getElementById("hammer_handvs21p6").style.animation="usehammervs711 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handvs21p6").style.visibility="hidden";
            document.getElementById("hammer_pinvs21p6").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p6").style.visibility="visible";
            document.getElementById("hammer_hand_pushvs21p6").style.animation="usehammervshand711 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrvs21p6").style.visibility="visible";
            document.getElementById("barrowbuttonvs21p6").style.visibility="visible";
            document.getElementById("stepv2l").style.visibility="hidden";
            document.getElementById("stepv2m").style.visibility="visible";
        },3100);
}

function buttonvs71()
{
    document.getElementById("transboxrvs21p6").style.visibility="hidden";
    document.getElementById("barrowbuttonvs21p6").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepointvs6").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointvs6").style.animation="hammermetervs_6 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammervs21p6").style.visibility="hidden";
            document.getElementById("scalevs21").style.visibility="hidden";
            document.getElementById("scalepointvs6").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            // document.getElementById("stepup2m").style.visibility="hidden";
            // document.getElementById("stepup2n").style.visibility="visible";
            
            document.getElementById("hammer_pinvs21p6").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushvs21p6").style.visibility="hidden";
            // document.getElementById("hammerups21p6").style.visibility="visible";
            // document.getElementById("scalepoint6").style.visibility="visible";
            // document.getElementById("barrowhammerups21p6").style.visibility="visible";
            document.getElementById("barrownextvs2").style.visibility="visible";
            document.getElementById("handarrowvs2").style.visibility="visible";
        },3000);
}

/*=========*/






/*Horizontal Downwards point 1*/

function usehammerds21()
{
    document.getElementById("barrowhammerds21").style.visibility="hidden";

    document.getElementById("hammerds21").style.visibility="hidden";
    
    document.getElementById("hammer_handds21").style.visibility="visible";
    
    document.getElementById("hammer_handds21").style.animation="usehammerds211 3s forwards";
//     setTimeout(function()
//         {
// document.getElementById("hammer_hand21").style.visibility="hidden";
//         },3000);

setTimeout(function()
        {
            document.getElementById("hammer_handds21").style.visibility="hidden";
            document.getElementById("hammer_pinds21").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21").style.animation="usehammerdshand211 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds21").style.visibility="visible";
            document.getElementById("barrowbuttonds21").style.visibility="visible";
            document.getElementById("stepd2b").style.visibility="hidden";
            document.getElementById("stepd2c").style.visibility="visible";
        },3100);
}

function buttonds21()
{
    document.getElementById("transboxrds21").style.visibility="hidden";
    document.getElementById("barrowbuttonds21").style.visibility="hidden";
    document.getElementById("scaleds21").style.visibility="visible";
    document.getElementById("scalepointds1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds1").style.animation="hammermeterds_1 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerds21").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointds1").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepd2c").style.visibility="hidden";
            document.getElementById("stepd2d").style.visibility="visible";
            
            document.getElementById("hammer_pinds21").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushds21").style.visibility="hidden";
            document.getElementById("hammerds22").style.visibility="visible";
            document.getElementById("scalepointds2").style.visibility="visible";
            document.getElementById("barrowhammerds21p2").style.visibility="visible";
        },3000);
}

/*=========*/


/*Horizontal Downwards point 2*/

function usehammerds31()
{
    document.getElementById("barrowhammerds21p2").style.visibility="hidden";

    document.getElementById("hammerds22").style.visibility="hidden";
    
    document.getElementById("hammer_handds21p2").style.visibility="visible";
    
    document.getElementById("hammer_handds21p2").style.animation="usehammerds311 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handds21p2").style.visibility="hidden";
            document.getElementById("hammer_pinds21p2").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p2").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p2").style.animation="usehammerdshand311 2s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds22").style.visibility="visible";
            document.getElementById("barrowbuttonds21p2").style.visibility="visible";
            document.getElementById("stepd2d").style.visibility="hidden";
            document.getElementById("stepd2e").style.visibility="visible";
        },3100);
}

function buttonds31()
{
    document.getElementById("transboxrds22").style.visibility="hidden";
    document.getElementById("barrowbuttonds21p2").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds2").style.animation="hammermeterds_2 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammer_hand_pushds21p2").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointds2").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepd2e").style.visibility="hidden";
            document.getElementById("stepd2f").style.visibility="visible";
            
            document.getElementById("hammer_pinds21p2").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushds21p2").style.visibility="hidden";
            document.getElementById("hammerds23").style.visibility="visible";
            document.getElementById("scalepointds3").style.visibility="visible";
            document.getElementById("barrowhammerds21p3").style.visibility="visible";
        },3000);
}

/*=========*/


/*Horizontal Downwards point 3*/

function usehammerds41()
{
    document.getElementById("barrowhammerds21p3").style.visibility="hidden";

    document.getElementById("hammerds23").style.visibility="hidden";
    
    document.getElementById("hammer_handds21p3").style.visibility="visible";
    
    document.getElementById("hammer_handds21p3").style.animation="usehammerds411 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handds21p3").style.visibility="hidden";
            document.getElementById("hammer_pinds21p3").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p3").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p3").style.animation="usehammerdshand411 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds23").style.visibility="visible";
            document.getElementById("barrowbuttonds21p3").style.visibility="visible";
            document.getElementById("stepd2f").style.visibility="hidden";
            document.getElementById("stepd2g").style.visibility="visible";
        },3100);
}

function buttonds41()
{
    document.getElementById("transboxrds23").style.visibility="hidden";
    document.getElementById("barrowbuttonds21p3").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds3").style.animation="hammermeterds_3 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerds23").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointds3").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepd2g").style.visibility="hidden";
            document.getElementById("stepd2h").style.visibility="visible";
            
            document.getElementById("hammer_pinds21p3").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushds21p3").style.visibility="hidden";
            document.getElementById("hammerds24").style.visibility="visible";
            document.getElementById("scalepointds4").style.visibility="visible";
            document.getElementById("barrowhammerds21p4").style.visibility="visible";
        },3000);
}

/*=========*/


/*Horizontal Downwards point 4*/

function usehammerds51()
{
    document.getElementById("barrowhammerds21p4").style.visibility="hidden";

    document.getElementById("hammerds24").style.visibility="hidden";
    
    document.getElementById("hammer_handds21p4").style.visibility="visible";
    
    document.getElementById("hammer_handds21p4").style.animation="usehammerds511 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handds21p4").style.visibility="hidden";
            document.getElementById("hammer_pinds21p4").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p4").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p4").style.animation="usehammerdshand511 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds24").style.visibility="visible";
            
            document.getElementById("barrowbuttonds21p4").style.visibility="visible";
            document.getElementById("stepd2h").style.visibility="hidden";
            document.getElementById("stepd2i").style.visibility="visible";
        },3100);
}

function buttonds51()
{
    document.getElementById("transboxrds24").style.visibility="hidden";
    document.getElementById("barrowbuttonds21p4").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds4").style.animation="hammermeterds_4 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerds24").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointds4").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepd2i").style.visibility="hidden";
            document.getElementById("stepd2j").style.visibility="visible";

            document.getElementById("hammer_pinds21p4").style.visibility="hidden";

            document.getElementById("hammer_hand_pushds21p4").style.visibility="hidden";
            document.getElementById("hammerds25").style.visibility="visible";
            document.getElementById("scalepointds5").style.visibility="visible";
            document.getElementById("barrowhammerds21p5").style.visibility="visible";
        },3000);
}

/*=========*/



/*Horizontal Downwards point 5*/

function usehammerds61()
{
    document.getElementById("barrowhammerds21p5").style.visibility="hidden";

    document.getElementById("hammerds25").style.visibility="hidden";
    
    document.getElementById("hammer_handds21p5").style.visibility="visible";
    
    document.getElementById("hammer_handds21p5").style.animation="usehammerds611 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handds21p5").style.visibility="hidden";
            document.getElementById("hammer_pinds21p5").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p5").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p5").style.animation="usehammerdshand611 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds25").style.visibility="visible";
            document.getElementById("barrowbuttonds21p5").style.visibility="visible";
            document.getElementById("stepd2j").style.visibility="hidden";
            document.getElementById("stepd2k").style.visibility="visible";
        },3100);
}

function buttonds61()
{
    document.getElementById("transboxrds25").style.visibility="hidden";
    document.getElementById("barrowbuttonds21p5").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepoint1").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds5").style.animation="hammermeterds_5 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerds25").style.visibility="hidden";
            // document.getElementById("scaleups21").style.visibility="hidden";
            document.getElementById("scalepointds5").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            document.getElementById("stepd2k").style.visibility="hidden";
            document.getElementById("stepd2l").style.visibility="visible";
            
            document.getElementById("hammer_pinds21p5").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushds21p5").style.visibility="hidden";
            document.getElementById("hammerds26").style.visibility="visible";
            document.getElementById("scalepointds6").style.visibility="visible";
            document.getElementById("barrowhammerds21p6").style.visibility="visible";
        },3000);
}

/*=========*/


/*Horizontal Downwards point 6*/

function usehammerds71()
{
    document.getElementById("barrowhammerds21p6").style.visibility="hidden";

    document.getElementById("hammerds26").style.visibility="hidden";
    
    document.getElementById("hammer_handds21p6").style.visibility="visible";
    
    document.getElementById("hammer_handds21p6").style.animation="usehammerds711 3s forwards";
setTimeout(function()
        {
            document.getElementById("hammer_handds21p6").style.visibility="hidden";
            document.getElementById("hammer_pinds21p6").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p6").style.visibility="visible";
            document.getElementById("hammer_hand_pushds21p6").style.animation="usehammerdshand711 1s forwards";
        },3000);
        setTimeout(function()
        {
            // document.getElementById("hammer_hand21").style.visibility="visible";
            document.getElementById("transboxrds26").style.visibility="visible";
            document.getElementById("barrowbuttonds26").style.visibility="visible";
            document.getElementById("stepd2l").style.visibility="hidden";
            document.getElementById("stepd2m").style.visibility="visible";
        },3100);
}

function buttonds71()
{
    document.getElementById("transboxrds26").style.visibility="hidden";
    document.getElementById("barrowbuttonds26").style.visibility="hidden";
    // document.getElementById("scaleups21").style.visibility="visible";
    // document.getElementById("scalepointds6").style.visibility="visible";
    // document.getElementById("arrowups21").style.visibility="visible";
document.getElementById("scalepointds6").style.animation="hammermeterds_6 2s forwards";
        setTimeout(function()
        {
            document.getElementById("hammerds26").style.visibility="hidden";
            document.getElementById("scaleds21").style.visibility="hidden";
            document.getElementById("scalepointds6").style.visibility="hidden";
            // document.getElementById("arrowups21").style.visibility="hidden";
            // document.getElementById("transboxrups21").style.visibility="hidden";
            // document.getElementById("stepup2m").style.visibility="hidden";
            // document.getElementById("stepup2n").style.visibility="visible";
            
            document.getElementById("hammer_pinds21p6").style.visibility="hidden";
            
            document.getElementById("hammer_hand_pushds21p6").style.visibility="hidden";
            // document.getElementById("hammerups21p6").style.visibility="visible";
            // document.getElementById("scalepoint6").style.visibility="visible";
            // document.getElementById("barrowhammerups21p6").style.visibility="visible";
            document.getElementById("barrownextds2").style.visibility="visible";
            document.getElementById("handarrowds2").style.visibility="visible";
        },3000);
}

/*=========*/

function indexsample()
{
    document.getElementById("arrownavNext13").style.visibility="visible";
    document.getElementById("navNext13").style.visibility="visible";
}


var a1;
var a2;
var a3;
var a4;
var a5;
var a6;

function indexsample1()
{
a1 = document.getElementById("ind1").value;
a2 = document.getElementById("ind2").value;
a3 = document.getElementById("ind3").value;
a4 = document.getElementById("ind4").value;
a5 = document.getElementById("ind5").value;
a6 = document.getElementById("ind6").value;

if (a1 == 32 && a2 == 32 && a3 == 20 && a4 == 35 && a5 == 34 && a6 == 34)
    {
    document.getElementById("arrownavNext13").style.visibility="visible";
    document.getElementById("navNext13").style.visibility="visible";
    document.getElementById("isbtn1").style.visibility="hidden";
    document.getElementById("ind1").style.border ="2px solid green";
    document.getElementById("ind2").style.border ="2px solid green";
    document.getElementById("ind3").style.border ="2px solid green";
    document.getElementById("ind4").style.border ="2px solid green";
    document.getElementById("ind5").style.border ="2px solid green";
    document.getElementById("ind6").style.border ="2px solid green";
    }

else 
{ 

    if (a1 !== 32 || a1 == "") 
    {
    document.getElementById("ind1").style.border ="2px solid red";
    }
    if (a1 == 32) 
    {
    document.getElementById("ind1").style.border ="2px solid green";
    }

    if (a2 !== 32 || a2 == "") 
    {
    document.getElementById("ind2").style.border ="2px solid red";
    }
    if (a2 == 32) 
    {
    document.getElementById("ind2").style.border ="2px solid green";
    }
    if (a3 !== 20 || a3 == "") 
    {
    document.getElementById("ind3").style.border ="2px solid red";
    }
    if (a3 == 20) 
    {
    document.getElementById("ind3").style.border ="2px solid green";
    }
    if (a4 !== 35 || a4 == "") 
    {
    document.getElementById("ind4").style.border ="2px solid red";
    }
    if (a4 == 35) 
    {
    document.getElementById("ind4").style.border ="2px solid green";
    }
    if (a5 !== 34 || a5 == "") 
    {
    document.getElementById("ind5").style.border ="2px solid red";
    }
    if (a5 == 34) 
    {
    document.getElementById("ind5").style.border ="2px solid green";
    }
    if (a6 !== 34 || a6 == "") 
    {
    document.getElementById("ind6").style.border ="2px solid red";
    }
    if (a6 == 34) 
    {
    document.getElementById("ind6").style.border ="2px solid green";
    }
    else
    {
    // alert("selectcase");
    }

}

}


function indexsample2()
{
a1 = document.getElementById("ind1").value;
a2 = document.getElementById("ind2").value;
a3 = document.getElementById("ind3").value;
a4 = document.getElementById("ind4").value;
a5 = document.getElementById("ind5").value;
a6 = document.getElementById("ind6").value;

if (a1 == 26 && a2 == 27 && a3 == 27 && a4 == 26 && a5 == 28 && a6 == 38)
    {
    document.getElementById("arrownavNext13").style.visibility="visible";
    document.getElementById("navNext13").style.visibility="visible";
    document.getElementById("isbtn2").style.visibility="hidden";
    document.getElementById("ind1").style.border ="2px solid green";
    document.getElementById("ind2").style.border ="2px solid green";
    document.getElementById("ind3").style.border ="2px solid green";
    document.getElementById("ind4").style.border ="2px solid green";
    document.getElementById("ind5").style.border ="2px solid green";
    document.getElementById("ind6").style.border ="2px solid green";
    }

else 
{ 

    if (a1 !== 26 || a1 == "") 
    {
    document.getElementById("ind1").style.border ="2px solid red";
    }
    if (a1 == 26) 
    {
    document.getElementById("ind1").style.border ="2px solid green";
    }

    if (a2 !== 27 || a2 == "") 
    {
    document.getElementById("ind2").style.border ="2px solid red";
    }
    if (a2 == 27) 
    {
    document.getElementById("ind2").style.border ="2px solid green";
    }
    if (a3 !== 27 || a3 == "") 
    {
    document.getElementById("ind3").style.border ="2px solid red";
    }
    if (a3 == 27) 
    {
    document.getElementById("ind3").style.border ="2px solid green";
    }
    if (a4 !== 26 || a4 == "") 
    {
    document.getElementById("ind4").style.border ="2px solid red";
    }
    if (a4 == 26) 
    {
    document.getElementById("ind4").style.border ="2px solid green";
    }
    if (a5 !== 28 || a5 == "") 
    {
    document.getElementById("ind5").style.border ="2px solid red";
    }
    if (a5 == 28) 
    {
    document.getElementById("ind5").style.border ="2px solid green";
    }
    if (a6 !== 38 || a6 == "") 
    {
    document.getElementById("ind6").style.border ="2px solid red";
    }
    if (a6 == 38) 
    {
    document.getElementById("ind6").style.border ="2px solid green";
    }
    else
    {
    // alert("selectcase");
    }
    
}

}


function indexsample3()
{
a1 = document.getElementById("ind1").value;
a2 = document.getElementById("ind2").value;
a3 = document.getElementById("ind3").value;
a4 = document.getElementById("ind4").value;
a5 = document.getElementById("ind5").value;
a6 = document.getElementById("ind6").value;

if (a1 == 16 && a2 == 32 && a3 == 30 && a4 == 29 && a5 == 30 && a6 == 28)
    {
    document.getElementById("arrownavNext13").style.visibility="visible";
    document.getElementById("navNext13").style.visibility="visible";
    document.getElementById("isbtn3").style.visibility="hidden";
    document.getElementById("ind1").style.border ="2px solid green";
    document.getElementById("ind2").style.border ="2px solid green";
    document.getElementById("ind3").style.border ="2px solid green";
    document.getElementById("ind4").style.border ="2px solid green";
    document.getElementById("ind5").style.border ="2px solid green";
    document.getElementById("ind6").style.border ="2px solid green";
    }

else 
{ 

    if (a1 !== 16 || a1 == "") 
    {
    document.getElementById("ind1").style.border ="2px solid red";
    }
    if (a1 == 16) 
    {
    document.getElementById("ind1").style.border ="2px solid green";
    }

    if (a2 !== 32 || a2 == "") 
    {
    document.getElementById("ind2").style.border ="2px solid red";
    }
    if (a2 == 32) 
    {
    document.getElementById("ind2").style.border ="2px solid green";
    }
    if (a3 !== 30 || a3 == "") 
    {
    document.getElementById("ind3").style.border ="2px solid red";
    }
    if (a3 == 30) 
    {
    document.getElementById("ind3").style.border ="2px solid green";
    }
    if (a4 !== 29 || a4 == "") 
    {
    document.getElementById("ind4").style.border ="2px solid red";
    }
    if (a4 == 29) 
    {
    document.getElementById("ind4").style.border ="2px solid green";
    }
    if (a5 !== 30 || a5 == "") 
    {
    document.getElementById("ind5").style.border ="2px solid red";
    }
    if (a5 == 30) 
    {
    document.getElementById("ind5").style.border ="2px solid green";
    }
    if (a6 !== 28 || a6 == "") 
    {
    document.getElementById("ind6").style.border ="2px solid red";
    }
    if (a6 == 28) 
    {
    document.getElementById("ind6").style.border ="2px solid green";
    }
    else
    {
    // alert("selectcase");
    }
    
}


/*
if (case1 == "hu")
 {

 }
else if (case1 == "v")
 {

 }
else if (case1 == "hd")
 {

 }
*/




}

function showegraph1()
{

    
// alert("hello");
// document.getElementById("submit121").style.visibility="hidden";
    new Chartist.Line('.ct-chart', {
    // labels: ["l1", "l2", "l3", "l4", "l5", "l6"],
  labels: ['a', 'b', 'c', 'd', 'e', 'f'],
  series: [

        // [100, 200, 300, 200, 245, 555]
    [a1, a2, a3, a4, a5, a6]
    
    // [1, 2, 2.5, 3.5, 4]
  ]
}, {
  width: 400,
  height: 260
});


document.getElementById("arrownavNext14").style.visibility="visible";
document.getElementById("navNext14").style.visibility="visible";


}



function showresultbtn()
{

document.getElementById("arrownavNext15").style.visibility="visible";
document.getElementById("navNext15").style.visibility="visible";

}



function showreportbtn()
{

document.getElementById("arrownavNext16").style.visibility="visible";
document.getElementById("navNext16").style.visibility="visible";

}


function reset()
{
    location.reload();
}















function usehammerups22()
{
    document.getElementById("barrowhammerups22").style.visibility="hidden";
    document.getElementById("hammerups22").style.animation="usehammerups221 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrups22").style.visibility="visible";
            document.getElementById("barrowbuttonups22").style.visibility="visible";
            document.getElementById("stepup2d").style.visibility="hidden";
            document.getElementById("stepup2e").style.visibility="visible";
        },2000);
}

function buttonups22()
{
    document.getElementById("barrowbuttonups22").style.visibility="hidden";
    document.getElementById("scaleups22").style.visibility="visible";
    document.getElementById("arrowups22").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerups22").style.visibility="hidden";
            document.getElementById("scaleups22").style.visibility="hidden";
            document.getElementById("arrowups22").style.visibility="hidden";
            document.getElementById("transboxrups22").style.visibility="hidden";
            document.getElementById("stepup2e").style.visibility="hidden";
            document.getElementById("stepup2f").style.visibility="visible";
            document.getElementById("hammerups23").style.visibility="visible";
            document.getElementById("barrowhammerups23").style.visibility="visible";
        },1000);
}

function usehammerups23()
{
    document.getElementById("barrowhammerups23").style.visibility="hidden";
    document.getElementById("hammerups23").style.animation="usehammerups231 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrups23").style.visibility="visible";
            document.getElementById("barrowbuttonups23").style.visibility="visible";
            document.getElementById("stepup2f").style.visibility="hidden";
            document.getElementById("stepup2g").style.visibility="visible";
        },2000);
}

function buttonups23()
{
    document.getElementById("barrowbuttonups23").style.visibility="hidden";
    document.getElementById("scaleups23").style.visibility="visible";
    document.getElementById("arrowups23").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerups23").style.visibility="hidden";
            document.getElementById("scaleups23").style.visibility="hidden";
            document.getElementById("arrowups23").style.visibility="hidden";
            document.getElementById("transboxrups23").style.visibility="hidden";
            document.getElementById("stepup2g").style.visibility="hidden";
            document.getElementById("stepup2h").style.visibility="visible";
            document.getElementById("hammerups24").style.visibility="visible";
            document.getElementById("barrowhammerups24").style.visibility="visible";
        },1000);
}

function usehammerups24()
{
    document.getElementById("barrowhammerups24").style.visibility="hidden";
    document.getElementById("hammerups24").style.animation="usehammerups241 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrups24").style.visibility="visible";
            document.getElementById("barrowbuttonups24").style.visibility="visible";
            document.getElementById("stepup2h").style.visibility="hidden";
            document.getElementById("stepup2i").style.visibility="visible";
        },2000);
}

function buttonups24()
{
    document.getElementById("barrowbuttonups24").style.visibility="hidden";
    document.getElementById("scaleups24").style.visibility="visible";
    document.getElementById("arrowups24").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerups24").style.visibility="hidden";
            document.getElementById("scaleups24").style.visibility="hidden";
            document.getElementById("arrowups24").style.visibility="hidden";
            document.getElementById("transboxrups24").style.visibility="hidden";
            document.getElementById("stepup2i").style.visibility="hidden";
            document.getElementById("stepup2j").style.visibility="visible";
            document.getElementById("hammerups25").style.visibility="visible";
            document.getElementById("barrowhammerups25").style.visibility="visible";
        },1000);
}

function usehammerups25()
{
    document.getElementById("barrowhammerups25").style.visibility="hidden";
    document.getElementById("hammerups25").style.animation="usehammerups251 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrups25").style.visibility="visible";
            document.getElementById("barrowbuttonups25").style.visibility="visible";
            document.getElementById("stepup2j").style.visibility="hidden";
            document.getElementById("stepup2k").style.visibility="visible";
        },2000);
}

function buttonups25()
{
    document.getElementById("barrowbuttonups25").style.visibility="hidden";
    document.getElementById("scaleups25").style.visibility="visible";
    document.getElementById("arrowups25").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerups25").style.visibility="hidden";
            document.getElementById("scaleups25").style.visibility="hidden";
            document.getElementById("arrowups25").style.visibility="hidden";
            document.getElementById("transboxrups25").style.visibility="hidden";
            document.getElementById("stepup2k").style.visibility="hidden";
            document.getElementById("stepup2l").style.visibility="visible";
            document.getElementById("hammerups26").style.visibility="visible";
            document.getElementById("barrowhammerups26").style.visibility="visible";
        },1000);
}

function usehammerups26()
{
    document.getElementById("barrowhammerups26").style.visibility="hidden";
    document.getElementById("hammerups26").style.animation="usehammerups261 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrups26").style.visibility="visible";
            document.getElementById("barrowbuttonups26").style.visibility="visible";
            document.getElementById("stepup2l").style.visibility="hidden";
            document.getElementById("stepup2m").style.visibility="visible";
        },2000);
}

function buttonups26()
{
    document.getElementById("barrowbuttonups26").style.visibility="hidden";
    document.getElementById("scaleups26").style.visibility="visible";
    document.getElementById("arrowups26").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerups26").style.visibility="hidden";
            document.getElementById("scaleups26").style.visibility="hidden";
            document.getElementById("arrowups26").style.visibility="hidden";
            document.getElementById("transboxrups26").style.visibility="hidden";
            document.getElementById("barrownextups2").style.visibility="visible";
            document.getElementById("handarrowups2").style.visibility="visible";
        },1000);
}

// vertical

function addstonevs1()
{
    document.getElementById("barrowaddvs11").style.visibility="hidden";
    document.getElementById("addbtnvs11").style.visibility="hidden";
    document.getElementById("stonevs1").style.visibility="visible";
    document.getElementById("barrowstonevs1").style.visibility="visible";
    document.getElementById("stepv1a").style.visibility="hidden";
    document.getElementById("stepv1b").style.visibility="visible"; 
}

function usestonevs1()
{
    document.getElementById("barrowstonevs1").style.visibility="hidden";
    document.getElementById("stonevs1").style.visibility="hidden";
    document.getElementById("stonehandvs1").style.visibility="visible";
    document.getElementById("stonehandvs1").style.animation="usestonevs11 4s forwards";
setTimeout(function()
        {
    $("#scretch2").delay(500).fadeIn(2000);
 },2000);
        setTimeout(function()
        {
            document.getElementById("stonehandvs1").style.visibility="hidden";
            // document.getElementById("scretch2").style.visibility="visible";
            document.getElementById("markervs11").style.visibility="visible";
            document.getElementById("barrowmarkervs11").style.visibility="visible";
            document.getElementById("stepv1b").style.visibility="hidden";
            document.getElementById("stepv1c").style.visibility="visible";
            document.getElementById("stepv1bn").style.visibility="hidden";
            document.getElementById("transwhite4x").style.visibility="hidden";
            document.getElementById("transwhite5x").style.visibility="visible";
            document.getElementById("stepv1d").style.visibility="visible";
        },4000);
}

function usemarkervs11()
{
    document.getElementById("barrowmarkervs11").style.visibility="hidden";
    document.getElementById("markervs11").style.visibility="hidden";
    document.getElementById("handmarkervs11").style.visibility="visible";
    document.getElementById("handmarkervs11").style.animation="usemarkervs11a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs11").style.animation="usemarkervs11b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs11").style.visibility="visible";
            document.getElementById("handmarkervs11").style.animation="usemarkervs11c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs11").style.visibility="hidden";
                document.getElementById("markervs12").style.visibility="visible";
                document.getElementById("barrowmarkervs12").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkervs12()
{
    document.getElementById("barrowmarkervs12").style.visibility="hidden";
    document.getElementById("markervs12").style.visibility="hidden";
    document.getElementById("handmarkervs12").style.visibility="visible";
    document.getElementById("handmarkervs12").style.animation="usemarkervs12a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs12").style.animation="usemarkervs12b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs12").style.visibility="visible";
            document.getElementById("handmarkervs12").style.animation="usemarkervs12c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs12").style.visibility="hidden";
                document.getElementById("markervs13").style.visibility="visible";
                document.getElementById("barrowmarkervs13").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkervs13()
{
    document.getElementById("barrowmarkervs13").style.visibility="hidden";
    document.getElementById("markervs13").style.visibility="hidden";
    document.getElementById("handmarkervs13").style.visibility="visible";
    document.getElementById("handmarkervs13").style.animation="usemarkervs13a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs13").style.animation="usemarkervs13b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs13").style.visibility="visible";
            document.getElementById("handmarkervs13").style.animation="usemarkervs13c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs13").style.visibility="hidden";
                document.getElementById("markervs14").style.visibility="visible";
                document.getElementById("barrowmarkervs14").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkervs14()
{
    document.getElementById("barrowmarkervs14").style.visibility="hidden";
    document.getElementById("markervs14").style.visibility="hidden";
    document.getElementById("handmarkervs14").style.visibility="visible";
    document.getElementById("handmarkervs14").style.animation="usemarkervs14a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs14").style.animation="usemarkervs14b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs14").style.visibility="visible";
            document.getElementById("handmarkervs14").style.animation="usemarkervs14c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs14").style.visibility="hidden";
                document.getElementById("markervs15").style.visibility="visible";
                document.getElementById("barrowmarkervs15").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkervs15()
{
    document.getElementById("barrowmarkervs15").style.visibility="hidden";
    document.getElementById("markervs15").style.visibility="hidden";
    document.getElementById("handmarkervs15").style.visibility="visible";
    document.getElementById("handmarkervs15").style.animation="usemarkervs15a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs15").style.animation="usemarkervs15b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs15").style.visibility="visible";
            document.getElementById("handmarkervs15").style.animation="usemarkervs15c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs15").style.visibility="hidden";
                document.getElementById("markervs16").style.visibility="visible";
                document.getElementById("barrowmarkervs16").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkervs16()
{
    document.getElementById("barrowmarkervs16").style.visibility="hidden";
    document.getElementById("markervs16").style.visibility="hidden";
    document.getElementById("handmarkervs16").style.visibility="visible";
    document.getElementById("handmarkervs16").style.animation="usemarkervs16a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkervs16").style.animation="usemarkervs16b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointvs16").style.visibility="visible";
            document.getElementById("handmarkervs16").style.animation="usemarkervs16c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkervs16").style.visibility="hidden";
                document.getElementById("barrownextvs1").style.visibility="visible";
                document.getElementById("handarrowvs1").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function addhammervs2()
{
    document.getElementById("barrowaddvs21").style.visibility="hidden";
    document.getElementById("addbtnvs21").style.visibility="hidden";
    document.getElementById("hammervs21").style.visibility="visible";
    document.getElementById("barrowhammervs21").style.visibility="visible";
    document.getElementById("stepv2a").style.visibility="hidden";
    document.getElementById("stepv2b").style.visibility="visible"; 
}

function usessdfhammervs21()
{
    document.getElementById("barrowhammervs21").style.visibility="hidden";
    document.getElementById("hammervs21").style.animation="usehammervs211 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs21").style.visibility="visible";
            document.getElementById("barrowbuttonvs21").style.visibility="visible";
            document.getElementById("stepv2b").style.visibility="hidden";
            document.getElementById("stepv2c").style.visibility="visible";
        },2000);
}

function butdstonvs21()
{
    document.getElementById("barrowbuttonvs21").style.visibility="hidden";
    document.getElementById("scalevs21").style.visibility="visible";
    document.getElementById("arrowvs21").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs21").style.visibility="hidden";
            document.getElementById("scalevs21").style.visibility="hidden";
            document.getElementById("arrowvs21").style.visibility="hidden";
            document.getElementById("transboxrvs21").style.visibility="hidden";
            document.getElementById("stepv2c").style.visibility="hidden";
            document.getElementById("stepv2d").style.visibility="visible";
            document.getElementById("hammervs22").style.visibility="visible";
            document.getElementById("barrowhammervs22").style.visibility="visible";
        },1000);
}

function usehammervs22()
{
    document.getElementById("barrowhammervs22").style.visibility="hidden";
    document.getElementById("hammervs22").style.animation="usehammervs221 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs22").style.visibility="visible";
            document.getElementById("barrowbuttonvs22").style.visibility="visible";
            document.getElementById("stepv2d").style.visibility="hidden";
            document.getElementById("stepv2e").style.visibility="visible";
        },2000);
}

function buttonvfdffs22()
{
    document.getElementById("barrowbuttonvs22").style.visibility="hidden";
    document.getElementById("scalevs22").style.visibility="visible";
    document.getElementById("arrowvs22").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs22").style.visibility="hidden";
            document.getElementById("scalevs22").style.visibility="hidden";
            document.getElementById("arrowvs22").style.visibility="hidden";
            document.getElementById("transboxrvs22").style.visibility="hidden";
            document.getElementById("stepv2e").style.visibility="hidden";
            document.getElementById("stepv2f").style.visibility="visible";
            document.getElementById("hammervs23").style.visibility="visible";
            document.getElementById("barrowhammervs23").style.visibility="visible";
        },1000);
}

function usehammervs23()
{
    document.getElementById("barrowhammervs23").style.visibility="hidden";
    document.getElementById("hammervs23").style.animation="usehammervs231 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs23").style.visibility="visible";
            document.getElementById("barrowbuttonvs23").style.visibility="visible";
            document.getElementById("stepv2f").style.visibility="hidden";
            document.getElementById("stepv2g").style.visibility="visible";
        },2000);
}

function buttonvs23()
{
    document.getElementById("barrowbuttonvs23").style.visibility="hidden";
    document.getElementById("scalevs23").style.visibility="visible";
    document.getElementById("arrowvs23").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs23").style.visibility="hidden";
            document.getElementById("scalevs23").style.visibility="hidden";
            document.getElementById("arrowvs23").style.visibility="hidden";
            document.getElementById("transboxrvs23").style.visibility="hidden";
            document.getElementById("stepv2g").style.visibility="hidden";
            document.getElementById("stepv2h").style.visibility="visible";
            document.getElementById("hammervs24").style.visibility="visible";
            document.getElementById("barrowhammervs24").style.visibility="visible";
        },1000);
}

function usehammervs24()
{
    document.getElementById("barrowhammervs24").style.visibility="hidden";
    document.getElementById("hammervs24").style.animation="usehammervs241 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs24").style.visibility="visible";
            document.getElementById("barrowbuttonvs24").style.visibility="visible";
            document.getElementById("stepv2h").style.visibility="hidden";
            document.getElementById("stepv2i").style.visibility="visible";
        },2000);
}

function buttonvs24()
{
    document.getElementById("barrowbuttonvs24").style.visibility="hidden";
    document.getElementById("scalevs24").style.visibility="visible";
    document.getElementById("arrowvs24").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs24").style.visibility="hidden";
            document.getElementById("scalevs24").style.visibility="hidden";
            document.getElementById("arrowvs24").style.visibility="hidden";
            document.getElementById("transboxrvs24").style.visibility="hidden";
            document.getElementById("stepv2i").style.visibility="hidden";
            document.getElementById("stepv2j").style.visibility="visible";
            document.getElementById("hammervs25").style.visibility="visible";
            document.getElementById("barrowhammervs25").style.visibility="visible";
        },1000);
}

function usehammervs25()
{
    document.getElementById("barrowhammervs25").style.visibility="hidden";
    document.getElementById("hammervs25").style.animation="usehammervs251 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs25").style.visibility="visible";
            document.getElementById("barrowbuttonvs25").style.visibility="visible";
            document.getElementById("stepv2j").style.visibility="hidden";
            document.getElementById("stepv2k").style.visibility="visible";
        },2000);
}

function buttonvs25()
{
    document.getElementById("barrowbuttonvs25").style.visibility="hidden";
    document.getElementById("scalevs25").style.visibility="visible";
    document.getElementById("arrowvs25").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs25").style.visibility="hidden";
            document.getElementById("scalevs25").style.visibility="hidden";
            document.getElementById("arrowvs25").style.visibility="hidden";
            document.getElementById("transboxrvs25").style.visibility="hidden";
            document.getElementById("stepv2k").style.visibility="hidden";
            document.getElementById("stepv2l").style.visibility="visible";
            document.getElementById("hammervs26").style.visibility="visible";
            document.getElementById("barrowhammervs26").style.visibility="visible";
        },1000);
}

function usehammervs26()
{
    document.getElementById("barrowhammervs26").style.visibility="hidden";
    document.getElementById("hammervs26").style.animation="usehammervs261 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrvs26").style.visibility="visible";
            document.getElementById("barrowbuttonvs26").style.visibility="visible";
            document.getElementById("stepv2l").style.visibility="hidden";
            document.getElementById("stepv2m").style.visibility="visible";
        },2000);
}

function buttonvs26()
{
    document.getElementById("barrowbuttonvs26").style.visibility="hidden";
    document.getElementById("scalevs26").style.visibility="visible";
    document.getElementById("arrowvs26").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammervs26").style.visibility="hidden";
            document.getElementById("scalevs26").style.visibility="hidden";
            document.getElementById("arrowvs26").style.visibility="hidden";
            document.getElementById("transboxrvs26").style.visibility="hidden";
            document.getElementById("barrownextvs2").style.visibility="visible";
            document.getElementById("handarrowvs2").style.visibility="visible";
        },1000);
}

// horizontal downwall

function addstoneds1()
{
    document.getElementById("barrowaddds11").style.visibility="hidden";
    document.getElementById("addbtnds11").style.visibility="hidden";
    document.getElementById("stoneds1").style.visibility="visible";
    document.getElementById("barrowstoneds1").style.visibility="visible";
    document.getElementById("stepd1a").style.visibility="hidden";
    document.getElementById("stepd1b").style.visibility="visible"; 
}

function usestoneds1()
{
    document.getElementById("barrowstoneds1").style.visibility="hidden";
    document.getElementById("stoneds1").style.visibility="hidden";
    document.getElementById("stonehandds1").style.visibility="visible";
    document.getElementById("stonehandds1").style.animation="usestoneds11 4s forwards";
setTimeout(function()
        {
    $("#scretch3").delay(500).fadeIn(2000);
 },2000);
        setTimeout(function()
        {
            document.getElementById("stonehandds1").style.visibility="hidden";
            // document.getElementById("scretch3").style.visibility="visible";
            document.getElementById("markerds11").style.visibility="visible";
            document.getElementById("barrowmarkerds11").style.visibility="visible";
            document.getElementById("stepd1b").style.visibility="hidden";
            document.getElementById("stepd1c").style.visibility="visible";
            document.getElementById("stepd1d").style.visibility="visible";
            document.getElementById("transwhite3x").style.visibility="hidden";
            document.getElementById("transwhite4").style.visibility="visible";
        },4000);
}

function addhammerds2()
{
    document.getElementById("barrowaddds21").style.visibility="hidden";
    document.getElementById("addbtnds21").style.visibility="hidden";
    document.getElementById("hammerds21").style.visibility="visible";
    document.getElementById("barrowhammerds21").style.visibility="visible";
    document.getElementById("stepd2a").style.visibility="hidden";
    document.getElementById("stepd2b").style.visibility="visible"; 
}
/*
function usemarkerds11()
{
    document.getElementById("barrowmarkerds11").style.visibility="hidden";
    document.getElementById("markerds11").style.visibility="hidden";
    document.getElementById("handmarkerds11").style.visibility="visible";
    document.getElementById("handmarkerds11").style.animation="usemarkerds11a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds11").style.animation="usemarkerds11b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds11").style.visibility="visible";
            document.getElementById("handmarkerds11").style.animation="usemarkerds11c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds11").style.visibility="hidden";
                document.getElementById("markerds12").style.visibility="visible";
                document.getElementById("barrowmarkerds12").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerds12()
{
    document.getElementById("barrowmarkerds12").style.visibility="hidden";
    document.getElementById("markerds12").style.visibility="hidden";
    document.getElementById("handmarkerds12").style.visibility="visible";
    document.getElementById("handmarkerds12").style.animation="usemarkerds12a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds12").style.animation="usemarkerds12b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds12").style.visibility="visible";
            document.getElementById("handmarkerds12").style.animation="usemarkerds12c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds12").style.visibility="hidden";
                document.getElementById("markerds13").style.visibility="visible";
                document.getElementById("barrowmarkerds13").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerds13()
{
    document.getElementById("barrowmarkerds13").style.visibility="hidden";
    document.getElementById("markerds13").style.visibility="hidden";
    document.getElementById("handmarkerds13").style.visibility="visible";
    document.getElementById("handmarkerds13").style.animation="usemarkerds13a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds13").style.animation="usemarkerds13b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds13").style.visibility="visible";
            document.getElementById("handmarkerds13").style.animation="usemarkerds13c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds13").style.visibility="hidden";
                document.getElementById("markerds14").style.visibility="visible";
                document.getElementById("barrowmarkerds14").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerds14()
{
    document.getElementById("barrowmarkerds14").style.visibility="hidden";
    document.getElementById("markerds14").style.visibility="hidden";
    document.getElementById("handmarkerds14").style.visibility="visible";
    document.getElementById("handmarkerds14").style.animation="usemarkerds14a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds14").style.animation="usemarkerds14b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds14").style.visibility="visible";
            document.getElementById("handmarkerds14").style.animation="usemarkerds14c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds14").style.visibility="hidden";
                document.getElementById("markerds15").style.visibility="visible";
                document.getElementById("barrowmarkerds15").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerds15()
{
    document.getElementById("barrowmarkerds15").style.visibility="hidden";
    document.getElementById("markerds15").style.visibility="hidden";
    document.getElementById("handmarkerds15").style.visibility="visible";
    document.getElementById("handmarkerds15").style.animation="usemarkerds15a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds15").style.animation="usemarkerds15b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds15").style.visibility="visible";
            document.getElementById("handmarkerds15").style.animation="usemarkerds15c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds15").style.visibility="hidden";
                document.getElementById("markerds16").style.visibility="visible";
                document.getElementById("barrowmarkerds16").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}

function usemarkerds16()
{
    document.getElementById("barrowmarkerds16").style.visibility="hidden";
    document.getElementById("markerds16").style.visibility="hidden";
    document.getElementById("handmarkerds16").style.visibility="visible";
    document.getElementById("handmarkerds16").style.animation="usemarkerds16a 1s forwards";

    setTimeout(function()
    {
        document.getElementById("handmarkerds16").style.animation="usemarkerds16b 1s forwards";
        setTimeout(function()
        {
            document.getElementById("pointds16").style.visibility="visible";
            document.getElementById("handmarkerds16").style.animation="usemarkerds16c 1s forwards";
            setTimeout(function()
            {
                document.getElementById("handmarkerds16").style.visibility="hidden";
                document.getElementById("barrownextds1").style.visibility="visible";
                document.getElementById("handarrowds1").style.visibility="visible";
            },1000);
        },1000);
    },1000);
}




function usehammerds21()
{
    document.getElementById("barrowhammerds21").style.visibility="hidden";
    document.getElementById("hammerds21").style.animation="usehammerds211 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds21").style.visibility="visible";
            document.getElementById("barrowbuttonds21").style.visibility="visible";
            document.getElementById("stepd2b").style.visibility="hidden";
            document.getElementById("stepd2c").style.visibility="visible";
        },2000);
}

function buttonds21()
{
    document.getElementById("barrowbuttonds21").style.visibility="hidden";
    document.getElementById("scaleds21").style.visibility="visible";
    document.getElementById("arrowds21").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds21").style.visibility="hidden";
            // document.getElementById("scaleds21").style.visibility="hidden";
            document.getElementById("arrowds21").style.visibility="hidden";
            document.getElementById("transboxrds21").style.visibility="hidden";
            document.getElementById("stepd2c").style.visibility="hidden";
            document.getElementById("stepd2d").style.visibility="visible";
            document.getElementById("hammerds22").style.visibility="visible";
            document.getElementById("barrowhammerds22").style.visibility="visible";
        },1000);
}

function usehammerds22()
{
    document.getElementById("barrowhammerds22").style.visibility="hidden";
    document.getElementById("hammerds22").style.animation="usehammerds221 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds22").style.visibility="visible";
            document.getElementById("barrowbuttonds22").style.visibility="visible";
            document.getElementById("stepd2d").style.visibility="hidden";
            document.getElementById("stepd2e").style.visibility="visible";
        },2000);
}

function buttonds22()
{
    document.getElementById("barrowbuttonds22").style.visibility="hidden";
    // document.getElementById("scaleds22").style.visibility="visible";
    document.getElementById("arrowds22").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds22").style.visibility="hidden";
            // document.getElementById("scaleds22").style.visibility="hidden";
            document.getElementById("arrowds22").style.visibility="hidden";
            document.getElementById("transboxrds22").style.visibility="hidden";
            document.getElementById("stepd2e").style.visibility="hidden";
            document.getElementById("stepd2f").style.visibility="visible";
            document.getElementById("hammerds23").style.visibility="visible";
            document.getElementById("barrowhammerds23").style.visibility="visible";
        },1000);
}

function usehammerds23()
{
    document.getElementById("barrowhammerds23").style.visibility="hidden";
    document.getElementById("hammerds23").style.animation="usehammerds231 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds23").style.visibility="visible";
            document.getElementById("barrowbuttonds23").style.visibility="visible";
            document.getElementById("stepd2f").style.visibility="hidden";
            document.getElementById("stepd2g").style.visibility="visible";
        },2000);
}

function buttonds23()
{
    document.getElementById("barrowbuttonds23").style.visibility="hidden";
    // document.getElementById("scaleds23").style.visibility="visible";
    document.getElementById("arrowds23").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds23").style.visibility="hidden";
            // document.getElementById("scaleds23").style.visibility="hidden";
            document.getElementById("arrowds23").style.visibility="hidden";
            document.getElementById("transboxrds23").style.visibility="hidden";
            document.getElementById("stepd2g").style.visibility="hidden";
            document.getElementById("stepd2h").style.visibility="visible";
            document.getElementById("hammerds24").style.visibility="visible";
            document.getElementById("barrowhammerds24").style.visibility="visible";
        },1000);
}

function usehammerds24()
{
    document.getElementById("barrowhammerds24").style.visibility="hidden";
    document.getElementById("hammerds24").style.animation="usehammerds241 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds24").style.visibility="visible";
            document.getElementById("barrowbuttonds24").style.visibility="visible";
            document.getElementById("stepd2h").style.visibility="hidden";
            document.getElementById("stepd2i").style.visibility="visible";
        },2000);
}

function buttonds24()
{
    document.getElementById("barrowbuttonds24").style.visibility="hidden";
    // document.getElementById("scaleds24").style.visibility="visible";
    document.getElementById("arrowds24").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds24").style.visibility="hidden";
            // document.getElementById("scaleds24").style.visibility="hidden";
            document.getElementById("arrowds24").style.visibility="hidden";
            document.getElementById("transboxrds24").style.visibility="hidden";
            document.getElementById("stepd2i").style.visibility="hidden";
            document.getElementById("stepd2j").style.visibility="visible";
            document.getElementById("hammerds25").style.visibility="visible";
            document.getElementById("barrowhammerds25").style.visibility="visible";
        },1000);
}

function usehammerds25()
{
    document.getElementById("barrowhammerds25").style.visibility="hidden";
    document.getElementById("hammerds25").style.animation="usehammerds251 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds25").style.visibility="visible";
            document.getElementById("barrowbuttonds25").style.visibility="visible";
            document.getElementById("stepd2j").style.visibility="hidden";
            document.getElementById("stepd2k").style.visibility="visible";
        },2000);
}

function buttonds25()
{
    document.getElementById("barrowbuttonds25").style.visibility="hidden";
    // document.getElementById("scaleds25").style.visibility="visible";
    document.getElementById("arrowds25").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds25").style.visibility="hidden";
            // document.getElementById("scaleds25").style.visibility="hidden";
            document.getElementById("arrowds25").style.visibility="hidden";
            document.getElementById("transboxrds25").style.visibility="hidden";
            document.getElementById("stepd2k").style.visibility="hidden";
            document.getElementById("stepd2l").style.visibility="visible";
            document.getElementById("hammerds26").style.visibility="visible";
            document.getElementById("barrowhammerds26").style.visibility="visible";
        },1000);
}

function usehammerds26()
{
    document.getElementById("barrowhammerds26").style.visibility="hidden";
    document.getElementById("hammerds26").style.animation="usehammerds261 2s forwards";

        setTimeout(function()
        {
            document.getElementById("transboxrds26").style.visibility="visible";
            document.getElementById("barrowbuttonds26").style.visibility="visible";
            document.getElementById("stepd2l").style.visibility="hidden";
            document.getElementById("stepd2m").style.visibility="visible";
        },2000);
}

function buttonds26()
{
    document.getElementById("barrowbuttonds26").style.visibility="hidden";
    // document.getElementById("scaleds26").style.visibility="visible";
    document.getElementById("arrowds26").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("hammerds26").style.visibility="hidden";
            // document.getElementById("scaleds26").style.visibility="hidden";
            document.getElementById("arrowds26").style.visibility="hidden";
            document.getElementById("transboxrds26").style.visibility="hidden";
            document.getElementById("barrownextds2").style.visibility="visible";
            document.getElementById("handarrowds2").style.visibility="visible";
        },1000);
}


 */





