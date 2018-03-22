var reds={
    clubN:"LFC funs Club",
    crust:"kopite",
    song:"YNWA",
    noOfMembers:5,
    theClub:function(){
        return this.clubN+" is a funs home with a "+this.crust+" logo with the famous "+ this.song+" song";
    },
    members:[
        {
            name:"Bura",
            age:30,
            married:false,
            hobbie:["football","codeing","film"],
            member1:function(){
                return this.name + " is a loyal member and has "+this.hobbie+" hobbies";
            },
            favPlayers:[
                {
                    name:"Mane",
                    age:25,
                    no:19,
                    country:"Senegal"
                },{
                    name:"Salah",
                    age:24,
                    no:11,
                    country:"Egypt"
                }
            ]
        },{
            name:"sami",
            age:28,
            married:true,
            hobbie:["tv","reading","drinking"],
            member2:function(){
                return this.name + " is a loyal member and has "+this.hobbie+" hobbies";
            },
            favPlayers:[
                {
                    name:"Bobby",
                    age:26,
                    no:9,
                    country:"Brazil",
                },{
                    name:"VanDjik",
                    age:26,
                    no:5,
                    country:"Holand",
                }
            ]
        }
    ]
}

//adding properties
reds.members[2]={name:"kebede",age:33,married:true,hobbie:["movie","sleeping"]};
reds.members[3]={name:"Ayele",age:54, married:true,hobbie:["drinking","smoking","reading"]}
reds.est=1892;

//adding items to Array 
reds.members[0].hobbie.push("tv","music","books");
reds.members[0].favPlayers.push({
    name:"hendo",
    age:27,
    no:14,
    country:"England",
})

// console.log(reds.members[0].favPlayers[2])
