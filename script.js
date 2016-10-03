var i;
var plat = [1, 3, 5, 7];
var id;
var nb; 
var ligne;
var ia_nb;
var j;
var str_ia;

nb = 0;
i = 0;

function fadee(str_ia) {
        $(str_ia).fadeOut('slow');
};

$(document).ready(function() {
    $('div').click(function() {
        if (i === 0){
        $(this).fadeOut('slow');
        if (this.id >= 30)
        plat[3] -= 1;
        else if (this.id >= 20)
        plat[2] -= 1;
        else if (this.id >= 10)
        plat[1] -= 1;
        else 
        plat[this.id] -= 1;
        if (this.id != 0)
        id = Math.round(this.id / 10);
        else
        id = this.id;
        }
        else if (Math.round(this.id / 10) != id && id != 3 || id == 0 || id == 3 && Math.round(this.id / 10) < 3)
        alert("You can only play on one line ! Clic IA TURN  to pass.");
        else {
        $(this).fadeOut('slow');
        if (this.id >= 30)
        plat[3] -= 1;
        else if (this.id >= 20)
        plat[2] -= 1;
        else if (this.id >= 10)
        plat[1] -= 1;
        else 
        plat[this.id] -= 1;
        }
        i = 1;
        if (plat[0] == 0 && plat[1] == 0 && plat[2] == 0 && plat[3] == 0)
        document.getElementById("all").innerHTML = "<center><img id=\"rest\" onclick=\"document.location.reload();\" src=\"http://s2.quickmeme.com/img/73/73f18275d50705a6ea783ba30fc587fb51d444ca9dea508ded9f66e749d87a4c.jpg\" height=\"600\" width=\"600\"></center>";
    });
    
    $('next').click(function() {
     if (i == 0)
     alert("Your Turn");
     else
     {
        ligne = Math.floor(Math.random() * 4) + 0;
        while (plat[ligne] == 0){
            ligne = Math.floor(Math.random() * 4) + 0;
        }
        if (ligne == 0 && plat[0] == 1)
        plat[0] = 0;
        else if (ligne > 0){
        ia_nb = Math.floor(Math.random() * (plat[ligne])) + 1;
        str_ia = '#' + ligne;
        i = 1;
        nb = plat[ligne];
        for (j = 0; j < ia_nb; j++){
        str_ia = '#' + ligne + (plat[ligne] - 1)
        a = fadee(str_ia);
        plat[ligne] -= 1;
        }
        i = 0;        
        
      if (plat[0] == 0 && plat[1] == 0 && plat[2] == 0 && plat[3] == 0)
        document.getElementById("all").innerHTML = "<center><img id=\"rest\" onclick=\"document.location.reload();\" src=\"http://data.whicdn.com/images/81311433/original.png\" height=\"600\" width=\"600\"></center>";
        }}
    });
    
});
