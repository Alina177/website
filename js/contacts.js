var write = document.getElementsByClassName('write')[0];
var wrapper = document.getElementsByClassName('wrapper-form')[0];

var height = 410;

//wrapper.style.display = 'none';
//forms.style.height = 0 + 'px';
window.onload = function() {
      var start = Date.now(); // сохранить время начала

      var timer = setInterval(function() {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;
        wrapper.style.height = 410 - timePassed/2  + 'px';
 
        if(timePassed > 900 && timePassed< 1000 ){
        	wrapper.style.display = 'block';
          write.style.color = '#ccc';
        }else if(timePassed > 1000 ){
         write.style.color = '#e9e9e9';
        }
        if (timePassed > 1300) clearInterval(timer);

      }, 50);
    }

    
