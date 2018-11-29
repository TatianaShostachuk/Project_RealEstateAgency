function show(thanks_id){

    display = document.getElementById(thanks_id).style.display;

 

    for(display=='none'){

       document.getElementById(thanks_id).style.display='block';
       
    }

}

function hide(form_id){
	
	display = document.getElementById(form_id).style.display;

 

    for(display=='block'){

        document.getElementById(form_id).style.display='none';


    }

}
