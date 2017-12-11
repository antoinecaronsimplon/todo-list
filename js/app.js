(function main(){
    var form = $('#addTask');
    var tasks = [
        {content: "acheter du lait", status: false, id:4}
    ];
    $('.btn').click(function(){
        var task = $('#task').val();
                if (task == ''){
                    alert ('Veuillez rentrer une donnée');
                }else{
                    for (var i=0;i<tasks.length;i++){
                        id=i;
                    }
                    tasks.push({content:task, status:false, id});
                    $('#renderTasks').append('<li id="litache">'+tasks[tasks.length -1].content+'</li>');
                    $('#task').val('');
                }
            return false;
    });  
    // BONUS
    $('#litache').click(function(){
        if (status === false){
            return true
        }else{
            return false
        }
        console.log('#litache');
    });
})();

// TODO :
// 1 : Repérer l'envoie du formulaire d'id 'addTask', puis dans le callback : 
    // 2 : Empéché le formulaire de recharger la page 
    // 3 : Récupérer la valeur de l'input d'id 'task'
    // 4 : Vérifier que la valeur n'est pas vide 
    //   - si elle est vide prevenir l'utilisateur
    //   - sinon stocker cette valeur dans un objet avec les clefs suivante : status, content, id puis les insérer de le tableau 'tasks' 
// 6 : Creer une fonction pour afficher les taches dans l'ul id 'renderTasks'
// 7 : Lancer la fonction au bon endroit ;)

// Bonus :
    // 1 : Lors du click sur une tache, changer sont status de true à false ou inversement.
    // 2 : Si la tache est en false, la faire apparaitre rouge, sinon verte.
    // 3 : Creer un select avec trois choix possible : todo, done, all
        // - Si le select est sur all, afficher toute les tâches
        // - Si le select est sur done, seulement les tâches avec le status true
        // - Si le select est sur todo, seulement les tâches avec le status false
    // 4






