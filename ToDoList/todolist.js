    var tabl =[];                                        //Edification table
   
  $(function(Library){                                   //Ready jquery
    localStorage.setItem('save', JSON.stringify(tabl));  //Sauvegarde locale
    console.dir(tabl);
    if (localStorage.length){
       tabl = JSON.parse(localStorage.getItem('save'));  //Chargement local
       for (var i=0; i < tabl.length; i++){
           adtach(tabl[i].content);
           }
    }
                  $('#butt');                            //Renvoie élément
                  $('#tex');
                  $('#edibutt');
                  $('#editext');
    var temlist;
    var edClick = function(Add){                         //Gestion fonction ajout
        temlist.innerHTML =  editext.value;              //Balisage
        $('#editTDF').toggleClass('modif');
    };
  
    $(butt).click(function(Alert){                       //Appel boite alerte
      if (document.getElementById('tex').value ===''){
          alert("Le champ est vide ! ");
    } else
    
    var doIt ={
    name:tex.value,
    };
    adtach(doIt);
    });
                    $(edibutt).click(edClick);           //Enregistrement string modifié
    var redoIt = function(Remove){                       //Retire renvoi élément parent
        var li = this.parentNode;
        li.remove();
    };
    
    var adtach = function(doIt){
          tex.value="";                                  //Remise barre à zero
        var doItUl = $('#tasksList');                    //Bouton renvoi tâche afin de modifier, supprimer
        var modifT = $('<button/>');
                    $(modifT).html('Modifier');
                    $(modifT).click(eddoIt);             //Enregistrement de l'event modifié
        var delet = $('<button/>');
                    $(delet).html('Supprimer');
                    $(delet).click(redoIt);              //Enregistrement de l'event supprimé
        var doItLi = $('<li/>');                         //Création objet liste
        
        var doitSpan = document.createElement('span');                                            
            doitSpan.innerHTML = doIt.name;              //Balisage                                            
            $(doItLi).append(doitSpan);                  //Child ajout noeud fin liste
            $(doItLi).append(modifT);
            $(doItLi).append(delet);
            $(doItUl).append(doItLi);
    };
    
    var eddoIt = function (Return){                      //Renvoi élément parent et first child
            $('#editTDF').toggleClass('modif');
        var li = this.parentNode;
        var span = li.firstChild;
        temlist = span;
        editext.value = span.innerText;
        editext.value="";                                //Remise champ "modifier" à zero
    };
  });
    $(function(Request){                                 //Requête get
        $('#butt').on('click', function(){
        $.ajax({
         type: 'GET',
         url: '',
         timeout: 3000,
         success: function(data){
         console.log(data);
         },
        error: function(){
         console.log('La requête AJAX butt n\'a pas abouti');
         }
        });
        });
    });
