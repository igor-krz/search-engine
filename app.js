$(document).ready(()=>{
  $( "theDiv1" ).hide();
  let gooFirstButton = new Promise((resolve, reject) => {
      $("#first-button").click(function (event) {
        event.preventDefault();
       
          $('header').css('color', 'pink');
          $( "#logoSearch" ).hide();
          $( "theDiv1" ).show();
        let result =$('#search').val();
        resolve(result);
        console.log(result);
      }); 
  });

  let gooSecondButton = new Promise((resolve, reject) => {
      $("#second-button").click(function (event) {
        event.preventDefault();
        let result =$('#search').val();
        resolve(result);
        console.log('Hello!!!!!!!!!');
      }); 
  });
  gooFirstButton.then(function(result){
  let api='https://www.googleapis.com/customsearch/v1/siterestrict?';
  let q='&q='+result;
  let key='key=AIzaSyBIQP1t3kbEWFFLG8W8VhGGNBic8WmQNkk';
  
  let cx='&cx=017243753355592370315:wckgaoqnyn3'
  let url=api+key+cx+q;
  console.log(url);
  fetch(url).then((response) => {
    return response.json();
        }).then((data) => { 
         let returnedObject = data.items
        for (i = 0; i < returnedObject.length; i++) {
          let links = returnedObject[i]['link']
          console.log(links);
            $('#theDiv1').append(('<h4> Result ' + (i+1) + ': </h4> <br> <a href="' + links+ '">' + links + ' </a> <br>'));   
          }                
          })
          .catch(error => alert(error='Sorry something went wrong :( OR the key has been exhausted'));
        });
          gooSecondButton.then(function(result){
            let api='https://www.googleapis.com/customsearch/v1/siterestrict?';
            let q='&q='+result;
            let key='key=AIzaSyBIQP1t3kbEWFFLG8W8VhGGNBic8WmQNkk';
            
            let cx='&cx=017243753355592370315:wckgaoqnyn3'
            let url=api+key+cx+q;
            console.log(url);
            fetch(url).then((response) => {
              return response.json();
                  }).then((data) => { 
                   let returnedObject = data.items[0]['link']
                   window.open(returnedObject)             
                    })
                    .catch(error => alert(error='Sorry something went wrong :( OR the key has been exhausted'));
                  });
              });    
          


