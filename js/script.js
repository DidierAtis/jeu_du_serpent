
document.addEventListener("DOMContentLoaded", function(event) {

    //le jeu

    class Jeu{

        constructor(_idSvg,_idPointage) {

            console.log("creation jeu");
            //recuper id svg
            this.s = Snap(_idSvg);

            this.sortiPointage = document.querySelector(_idPointage);

            this.grandeurCarre = 20;
            this.grandeurGrille = 15;


        }
        nouvellePartie(){


            this.finPartie();

            this.affichagePointage(1);

            this.pomme = new Pomme(this);
            this.serpent = new Serpent(this);
        }

        finPartie(){

            if(this.pomme!== undefined) {
                this.pomme.suprimePomme();
                this.pomme = undefined;
            }


        }

        affichagePointage(_lePointage){


            //aller afficher pointage html
            this.sortiPointage.innerHTML = _lePointage;

        }


    }


    //le serpent
    class Serpent{

        constructor(_leJeu) {
            console.log("creation serpent");
            this.leJeu = _leJeu;

        }

        verifTouche(evt){

        }
        deplacement(dirCode){

        }

        controleSerpent(){

        }

        dessineCarre(x,y){

        }

        supprimeSerpent(){

        }


    }
    //la pomme
    class Pomme{

        constructor(_leJeu) {
            console.log("creation pomme");

            this.leJeu = _leJeu;
            this.pomme = [];
            this.ajoutePomme();
        }
        ajoutePomme(){

            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            this.pomme =[this.leJeu.s.rect(posX*this.leJeu.grandeurCarre, posY*this.leJeu.grandeurCarre,this.leJeu.grandeurCarre,this.leJeu.grandeurCarre).attr({fill:'red'}),posX,posY];

        }



        suprimePomme(){

            this.pomme[0].remove();

        }

    }





    var unePartie = new Jeu("#jeu","#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener('click', nouvellePartie);

    function nouvellePartie(){

        unePartie.nouvellePartie();


    }

});