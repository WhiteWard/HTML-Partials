document.addEventListener("DOMContentLoaded", function(){
    let includes = document.getElementsByTagName('include');
    for(var i=0; i<includes.length; i++){
        let include = includes[i];
        load_template(includes[i].attributes.src.value, function(text){
            include.insertAdjacentHTML('afterend', text);
            include.remove();
        });
    }
    function load_template(filename, callback) {
        fetch(filename).then(response => response.text()).then(text => callback(text));
    }
});


/* <include src="./nav.html"></include> */
