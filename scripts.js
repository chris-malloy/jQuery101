// // console.log($)
// // javascript way
// // var header = document.getElementById('header');
// // console.dir(header);
// // jQuery way
// var header = $('#header');
// document.getElementById = $('#');

// // var colsm12 = document.getElementsByClassName('col-sm-12');
// // that ^ becomes this
// var colsm12 = $('.col-sm-12'); //yay jQuery


// // Targeting follows CSS rules 

// // main takeaway
// // $ replaces document.getElementById or document.getElementsByClassName


// // WAIT UNTIL THE DOM IS READY
// // first.... target the document
// var dom = $(document);
// console.dir(dom); //we are targeting the dom to pass methods against it.
// console.dir(document);

// // Call the ready method.  
// // It is an event addEventListener.
// // It will fire when ALL the HTML is loaded.$
// It takes 1 arg.... the function to run when the event happens


// console.log("JS is running...")
//     // you need this code for every document
//     // this is to prevent HTML from being affected before the page has finished loading 
// $(document).ready(function() {
//     // code to run when the DOM is finsihed loading.
//     var head = $('#header');
//     console.log(header);
// });

// THe difference between window.onload and document.ready, is that window.onload will wait until images/videos/etc. are done loading too.

// $(window).on('load', (function() {
//             console.log("Window finished loading")
//         });

$(document).ready(function() {
    // NATIVE JS WAY
    // document.getElementById('thing').addEventListener('click', function() {
    //     console.log("user clicked on the green button")
    // })
    // // JQUERY WAY
    // $('#thing').click(function() {
    //     console.log("User clicked on the green button and the jQuery did the things.")
    // })
    // Add a click listener to all buttons
    $('button').click(function() {
        console.log(this);
        var whatToDo = $(this).attr('toDo');
        console.log(whatToDo);
        if (whatToDo == 'hide') {
            $('#thing').hide();
        } else if (whatToDo == 'show') {
            $('#thing').show();
        } else if (whatToDo == 'toggle') {
            $('#thing').toggle();
        } else if (whatToDo == 'html') {
            // if you don't pass anything to html() then it will return current html
            // otherwise you can change it
            $('#thing').html('<strong>Someone changed my HTML</strong>')
        } else if (whatToDo == 'text') {
            // if you don't pass anything to html() then it will return current html
            // otherwise you can change it
            $('#thing').text('<strong>Someone changed my HTML</strong>')
        } else if (whatToDo == 'css') {
            // css method takes a JS object ...
            $('#thing').css({
                'background-color': 'orange',
                'border-radius': '50%',
                'font-size': '100px'
            });
        } else if (whatToDo == 'addClass') {
            // if you don't pass anything to html() then it will return current html
            // otherwise you can change it
            $('#thing').addClass('btn-danger');
        } else if (whatToDo == 'toggleClass') {
            // if you don't pass anything to html() then it will return current html
            // otherwise you can change it
            $('#thing').toggleClass('btn-danger');
        } else if (whatToDo == 'prepend') {
            // prepend is the as ... += innerHTML 
            $('#thing').prepend('This is some prepended text.');
        } else if (whatToDo == 'append') {
            $('#thing').append('This is some appended text.');
        } else if (whatToDo == 'fadeToggle') {
            $('#thing').fadeToggle(1500);
        } else if (whatToDo == 'slideToggle') {
            $('#thing').slideToggle(1500);
        } else if (whatToDo == 'animate') {
            // Animate takes 2 args:
            // 1. an object of css properties to animate too
            // 2. how long you want it to animate over (in mili)
            $('#thing').animate({
                'width': '40%',
                'opacity': .3,
                'font-size': '100px',
                'border-with': '10px'
            }, 1500);
        } else if (whatToDo == 'loop') {
            $('button').each(function() {
                console.log(this);
            })
        } else if (whatToDo == 'click') {
            $('#thing').click(function() {
                console.log(this);
            })
        } else if (whatToDo == 'hover') {
            $('#thing').hover(function() {
                $(this).css('background-color', 'blue');
            });
        } else if (whatToDo == 'fadeOut') {
            $('#thing').fadeOut();
        } else if (whatToDo == 'fadeIn') {
            $('#thing').fadeIn();
        } else if (whatToDo == 'slidedown') {
            $('#thing').slideDown();
        } else if (whatToDo == 'slideup') {
            $('#thing').slideUp();
        }
    });
});