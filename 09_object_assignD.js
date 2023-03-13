const professor = {
    firstName: "Mohit",
    lastName: "Sharma",
    age: 45,
    address: "Hadapsar Pune",
    contact: 0987654321,
    subject: "JavaScript",
    totalExperience: '10 years',
    degrees:{
        engineering: 'CSC',
        PHD: 'Adv Computing',
        certification: 'Angular',
    },
    certificates:["Hacker Rank Participation", "Certificate in IFE cource", "Certificate in Adv Programming" ],
    show: function(){
        console.log(professor.degrees);
    }
    // show: function(){ //function as value
    //     console.log(`Total degrees are: ${this.degrees}`);
    // }
  }
  console.log(professor);
  professor.contact = "0123456789";
  console.log(professor);
  professor.totalExperience = "14 years"
  professor.certificates = ["Oracle Certified"];
  console.table(professor);
  professor.show();











