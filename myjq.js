    //you can use document.ready function to load your html document first and then load the script actions
    $(document).ready(function(){
        //your jqery code here
        console.log("we are using jquery")
       // $('selector').action()
       //$('p').click()// click on all p elements (element selector)
    //      $('p').click(function(){
    //     console.log("you clicked on p",this);
    //   //  $(this).hide();
    //  })
    //     $('#last').click();
    //     $('.odd').click();
    //     //other selectors
    //     $('*').click(); //clicks on all elements
    //     $('p.odd').click();//('p:first ') to click first class
    //     console.log("i am in new file now and lets move to events")
    //     $('p').dblclick(function(){
    //         console.log("you double clicked",this)

    //     })
    //     $('p').hover(function(){
    //         console.log("you entered ",this)
            
    //     },function(){
    //         console.log("thanks for coming")
    //     }
    // )
    $('p').on(
        {
            click:function(){
        console.log("thanks for clicking",this)
            },
            mouseleave:function(){
                console.log("mouseleave")
            }
    })
    // $('#wiki').hide(1000,function(){
    //     console.log("work done hidden")
    // })
     $('#wiki').show(1000,function(){
        console.log("work done hidden")
     })
    // $('#but').click(function(){
    //     $('#wiki').toggle(1000)
    //})
    // $('#but').click(function(){
    //     $('#wiki').fadeToggle(1000)
    // })
    // $('#but').click(function(){
    //     $('#wiki').toggle(1000)
    // })
    $('#wiki').slideUp(1000,function(){
        console.log("doneee")
    })
    $('#wiki').slideDown(1000)
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height:'120px',
    //     width:'200px'

    // },"fast")
    $('#wiki').animate({opacity:0.3},2000)
    $('#wiki').animate({opacity:0.9},2000)
    //$('#wiki').stop()
    $('#wiki').animate({width:'400px'},2000)
    //$('#wiki').text("this is new txt")// to set and view text if we dont write anything i the brackets of text
    
// $("#tct").val("updated text area")// to get value of the text and we can uopdate also
// ce.fn.init {0: textarea#tct, length: 1}
// $("#inpu").val("updated text area")
// ce.fn.init {0: input#inpu, length: 1}
//$("#wiki").empty() // to empty the text area field .remove()is used to completly remove the element from the elements of html document
// $("#wiki").remove()
// ce.fn.init {0: div#wiki, length: 1}
// $("#wiki").addClass('myclass')
// ce.fn.init {} 
// $("#wiki").addClass('myclass')

// ce.fn.init {0: div#wiki.myclass, length: 1}
// $("#wiki").removeClass('myclass')   // toggleClass() function is also there

// ce.fn.init {0: div#wiki, length: 1}
//we can also set css with jquery
//$("#wiki").css('background-color':'red')
//ajax get request
//$.get('https://code.jquery.com/jquery-3.7.1.js', function(data,status){alert(data);})
//{readyState: 1, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}








  })
// console.log($)
// cdn is content delivery network 
// there are three main types of selectors in jQuery
// 1. element selectors 2. id selector 3. class selector   
// you van use id and class $("#id").action  and $('.class').class
// mouse events: click, doubleclick,mouseenter,mouseleave
//key board events: keypress,keydown ,mediakeystausmap
//form events:submit ,change ,focus,blur
//document/window events:load ,resize,scroll,unload


// cdn-->
//   <!-- <script
//   src="https://code.jquery.com/jquery-3.7.1.min.js"
//   integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
//   crossorigin="anonymous"></script> -->