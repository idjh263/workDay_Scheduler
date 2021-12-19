window.onload = function() {
    changeBackground();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
    sixPM();
    sevenPM();
   }

   var now = new Date().getHours();

   function changeBackground() {
    if (now > 9) {
        $("#textNine").addClass("past");
      } else if (now >= 9 && now < 10) {
        $("#textNine").addClass("present");
      } else if (now < 9) {
        $("textNine").addClass("future");
      }
      if (now > 10) {
        $("#textTen").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#textTen").addClass("present");
      } else if (now < 10) {
        $("#textTen").addClass("future");
      }
      if (now > 11) {
        $("#textEleven").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#textEleven").addClass("present");
      } else if (now < 11) {
        $("#textEleven").addClass("future");
      }
      if (now > 12) {
        $("#textTwelve").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#textTwelve").addClass("present");
      } else if (now < 12) {
        $("#textTwelve").addClass("future");
      }
      if (now > 13) {
        $("#textOne").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#textOne").addClass("present");
      } else if (now < 13) {
        $("#textOne").addClass("future");
      }
      if (now > 14) {
        $("#textTwo").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#textTwo").addClass("present");
      } else if (now < 14) {
        $("#textTwo").addClass("future");
      }
      if (now > 15) {
        $("#textThree").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#textThree").addClass("present");
      } else if (now < 15) {
        $("#textThree").addClass("future");
      }
      if (now > 16) {
        $("#textFour").addClass("past");
      } else if (now >= 16 && now < 17) {
        $("#textFour").addClass("present");
      } else if (now < 16) {
        $("#textFour").addClass("future");
      }
      if (now > 17) {
        $("#textFive").addClass("past");
      } else if (now >= 17 && now < 18) {
        $("#textFive").addClass("present");
      } else if (now < 17) {
        $("#textFive").addClass("future");
      }
      if (now > 18) {
        $("#textSix").addClass("past");
      } else if (now >= 18 && now < 19) {
        $("#textSix").addClass("present");
      } else if (now < 18) {
        $("#textSix").addClass("future");
      }
      if (now > 19) {
        $("#textSeven").addClass("past");
      } else if (now >= 19 && now < 20) {
        $("#textSeven").addClass("present");
      } else if (now < 19) {
        $("#textSeven").addClass("future");
      }
    }


    function nineAM() {
        var input_textarea1 = document.querySelector("#textNine");
        var output_div1 = document.querySelector("#textNine");
        var saveButton1 = document.querySelector("#button9am");
      
        saveButton1.addEventListener("click", updateOutput1);
      
        output_div1.textContent = localStorage.getItem("content1");
        input_textarea1.value = localStorage.getItem("content1");
      
        function updateOutput1() {
          localStorage.setItem("content1", input_textarea1.value);
      
          output_div1.textContent = input_textarea1.value;
        }
      }
      function tenAM() {
        var input_textarea2 = document.querySelector("#textTen");
        var output_div2 = document.querySelector("#textTen");
        var saveButton2 = document.querySelector("#button10am");
      
        saveButton2.addEventListener("click", updateOutput2);
      
        output_div2.textContent = localStorage.getItem("content2");
        input_textarea2.value = localStorage.getItem("content2");
      
        function updateOutput2() {
          localStorage.setItem("content2", input_textarea2.value);
      
          output_div2.textContent = input_textarea2.value;
        }
      }
      function elevenAM() {
        var input_textarea3 = document.querySelector("#textEleven");
        var output_div3 = document.querySelector("#textEleven");
        var saveButton3 = document.querySelector("#button11am");
      
        saveButton3.addEventListener("click", updateOutput3);
      
        output_div3.textContent = localStorage.getItem("content3");
        input_textarea3.value = localStorage.getItem("content3");
      
        function updateOutput3() {
          localStorage.setItem("content3", input_textarea3.value);
      
          output_div3.textContent = input_textarea3.value;
        }
    }
        function twelvePM() {
        var input_textarea4 = document.querySelector("#textTwelve");
        var output_div4 = document.querySelector("#textTwelve");
        var saveButton4 = document.querySelector("#button12nn");
      
        saveButton4.addEventListener("click", updateOutput4);
      
        output_div4.textContent = localStorage.getItem("content4");
        input_textarea4.value = localStorage.getItem("content4");
      
        function updateOutput4() {
          localStorage.setItem("content4", input_textarea4.value);
      
          output_div4.textContent = input_textarea4.value;
        }
    }
        function onePM() {
        var input_textarea5 = document.querySelector("#textOne");
        var output_div5 = document.querySelector("#textOne");
        var saveButton5 = document.querySelector("#button1pm");
      
        saveButton5.addEventListener("click", updateOutput5);
      
        output_div5.textContent = localStorage.getItem("content5");
        input_textarea5.value = localStorage.getItem("content5");
      
        function updateOutput5() {
          localStorage.setItem("content5", input_textarea5.value);
      
          output_div5.textContent = input_textarea5.value;
        }
      }
      
      function twoPM() {
        var input_textarea6= document.querySelector("#textTwo");
        var output_div6 = document.querySelector("#textTwo");
        var saveButton6 = document.querySelector("#button2pm");
      
        saveButton6.addEventListener("click", updateOutput6);
      
        output_div6.textContent = localStorage.getItem("content6");
        input_textarea6.value = localStorage.getItem("content6");
      
        function updateOutput6() {
          localStorage.setItem("content6", input_textarea6.value);
      
          output_div6.textContent = input_textarea6.value;
        }
      }
      function threePM() {
        var input_textarea7 = document.querySelector("#textThree");
        var output_div7 = document.querySelector("#textThree");
        var saveButton7 = document.querySelector("#button3pm");
      
        saveButton7.addEventListener("click", updateOutput7);
      
        output_div7.textContent = localStorage.getItem("content7");
        input_textarea7.value = localStorage.getItem("content7");
      
        function updateOutput7() {
          localStorage.setItem("content7", input_textarea7.value);
      
          output_div7.textContent = input_textarea7.value;
        }
      }
      function fourPM() {
        var input_textarea8 = document.querySelector("#textFour");
        var output_div8 = document.querySelector("#textFour");
        var saveButton8 = document.querySelector("#button4pm");
      
        saveButton8.addEventListener("click", updateOutput8);
      
        output_div8.textContent = localStorage.getItem("content8");
        input_textarea8.value = localStorage.getItem("content8");
      
        function updateOutput8() {
          localStorage.setItem("content8", input_textarea8.value);
      
          output_div8.textContent = input_textarea8.value;
        }
      }
      function fivePM() {
        var input_textarea9 = document.querySelector("#textFive");
        var output_div9 = document.querySelector("#textFive");
        var saveButton9= document.querySelector("#button5pm");
      
        saveButton9.addEventListener("click", updateOutput9);
      
        output_div9.textContent = localStorage.getItem("content9");
        input_textarea9.value = localStorage.getItem("content9");
      
        function updateOutput9() {
          localStorage.setItem("content9", input_textarea9.value);
      
          output_div9.textContent = input_textarea9.value;
        }
      }
      function sixPM() {
        var input_textarea10 = document.querySelector("#textSix");
        var output_div10 = document.querySelector("#textSix");
        var saveButton10 = document.querySelector("#button5pm");
      
        saveButton10.addEventListener("click", updateOutput10);
      
        output_div10.textContent = localStorage.getItem("content10");
        input_textarea10.value = localStorage.getItem("content10");
      
        function updateOutput10() {
          localStorage.setItem("content10", input_textarea.value);
      
          output_div.textContent = input_textarea.value;
        }
      }
        function sevenPM() {
        var input_textarea11 = document.querySelector("#textSeven");
        var output_div11 = document.querySelector("#textSeven");
        var saveButton11 = document.querySelector("#button7pm");
      
        saveButton11.addEventListener("click", updateOutput11);
      
        output_div11.textContent = localStorage.getItem("content11");
        input_textarea11.value = localStorage.getItem("content11");
      
        function updateOutput11() {
          localStorage.setItem("content11", input_textarea11.value);
      
          output_div11.textContent = input_textarea11.value;
        }
      }



const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

  
// Setting up the period of working
setInterval(() => {
  
    // Extracting the current time 
    // from DATE() function
    var day = new Date();
    var hour = day.getHours()
    var minutes = day.getMinutes()
    var seconds = day.getSeconds()
  
    // Formula that is explained above for 
    // the rotation of different hands
    var hrrotation = (30 * hour) + (0.5 * minutes);
    var minrotation = 6 * minutes;
    var secrotation = 6 * seconds;
  
    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =
        `translate(-50%,-85%) rotate(${secrotation}deg)`
});


var displayDate = document.getElementById("currentDate");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
displayDate.innerHTML = today.toDateString();


$(document).ready(function(){
	var n = new Date().getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});