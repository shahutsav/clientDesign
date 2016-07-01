var data= new Object();
    


	data['init']=[null,'SelectTournament','Copa16','Euros12'];
	data['Copa16']=[null, 'SelectStage','Copa16-GroupStage','Copa16-Quarters','Copa16-Semis','Copa16-Finals'];
	data['Euros12']=[null, 'SelectStage','Euro12-GroupStage','Euro12-Quarters','Euro12-Semis','Euro12-Finals'];

    data['Copa16-Quarters']=[null,'Select','Copa16-qf1','Copa16-qf2','Copa16-qf3','Copa16-qf4'];
    data['Copa16-Semis']=[null,'select','Copa16-sf1','Copa16-sf2'];

    data['Copa16-GroupStage']=['copa16'];
    data['Copa16-qf1']=['copa16'];
    data['Copa16-qf2']=['copa16'];
    data['Copa16-qf3']=['copa16'];
    data['Copa16-qf4']=['copa16'];
    data['Copa16-sf1']=['copa16'];
    data['Copa16-sf2']=['copa16'];
    data['Copa16-Finals']=['copa16'];

    data['Euro12-Quarters']=[null,'Select match','Euro12-qf1','Euro12-qf2','Euro12-qf3','Euro12-qf4'];
    data['Euro12-Semis']=[null,'Select match','Euro12-sf1','Euro12-sf2'];


data['Euro12-GroupStage']=['euro12'];
data['Euro12-qf1']=['euro12'];
data['Euro12-qf2']=['euro12'];
data['Euro12-qf3']=['euro12'];
data['Euro12-qf4']=['euro12'];
data['Euro12-sf1']=['euro12'];
data['Euro12-sf2']=['euro12'];
data['Euro12-Finals']=['euro12'];

var images=new Object();

//  images[which][2][1]
// team1,team2,[2,1],[2,3]
    images['Copa16-GroupStage']=[null,16];
    images['Copa16-qf1']=['United States','Ecuador',[2,1],[null]];
    images['Copa16-qf2']=['Peru','Colombia',[0,0],[2,4]];
    images['Copa16-qf3']=['Argentina','Venezuela',[4,1],[null]];
    images['Copa16-qf4']=['Mexico','Chile',[0,7],[null]];
    images['Copa16-sf1']=['United States','Argentina',[0,4],[null]];
    images['Copa16-sf2']=['Colombia','Chile',[0,2],[null]];
    images['Copa16-Finals16']=['Argentina','Chile',[0,0],[2,4]];

    images['Euro12-GroupStage']=[null,16];
    images['Euro12-qf1']=['Portugal','Czech Republic',[1,0],[null]];
    images['Euro12-qf2']=['Germany','Greece',[4,2],[null]];
    images['Euro12-qf3']=['Spain','France',[2,0],[null]];
    images['Euro12-qf4']=['Italy','England',[0,0],[4,2]];
    images['Euro12-sf1']=['Spain','Portugal',[0,0],[4,2]];
    images['Euro12-sf2']=['Italy','Germany',[2,1],[null]];
    images['Euro12-Finals']=['Spain','Italy',[4,0],[null]];
