
// function fetchRandomDogImage(){
//     // //make a request
//     // var xhrRequest=new XMLHttpRequest();

//     // //Handler
//     // xhrRequest.onload=function(){
//     //     console.log(xhrRequest.response);
//     //     //Right now we are getting a string. We have to convert it into JSON object.
//     //     var responseJSON=JSON.parse(xhrRequest.response);
//     //     var imageUrl=responseJSON.message;
//     //     console.log(imageUrl);
//     //     $('#dog-image').attr('src', imageUrl);

//     //Make a similar request using jquery
    

    

//     // //Initialise the request
//     // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
//     // //Make the request to the server
//     // xhrRequest.send();
//     $.ajax({
//         url: 'https://dog.ceo/api/breeds/image/random',
//         method: 'GET',
//         success: function(data){
//             console.log(data);

//            // var responseJSON=JSON.parse(data.response);
//             var imageUrl=data.message;
//             console.log(imageUrl);
//             $('#dog-image').attr('src', imageUrl);



//         }
//     });
//     $.ajax({
//         url: 'https://dog.ceo/api/breeds/list/all',
//         method: 'GET',
//         success: function(data){
//             console.log(data);
//             $('#dog-name').html(data.message[0]);
//         }
//     });

// }









// $('#get-button').click(fetchRandomDogImage);

var dropdown=$('#dog-name');
var breedImage=$('#dog-image-container');
var allowSubmit=true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$('#get-button').click(function(){
    if (allowSubmit) {
        breed = dropdown.val();
        console.log("Dog breed",breed);
        displayDog(breed);
        allowSubmit = false;
    }
});

$('#next-button').click(function(){
    if(breed!=undefined){
        displayDog(breed);
    }
})

function displayDog(breed){
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    $('#dog-image-container img').remove();
    $.get(url, function (data){
        let imageUrl=data.message;
        console.log("image url", imageUrl);
        console.log("Hello");
        $(document.createElement('img')).attr({
            src: imageUrl,
            height:'100%',
            width: '100%'
        }).appendTo('#dog-image-container');
        
     
    })   
}