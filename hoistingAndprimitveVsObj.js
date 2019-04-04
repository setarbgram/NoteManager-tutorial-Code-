var per={
    firestName:'john',
    lastName:'mansori',
    getFullName:function () {
        console.log (this.firestName + ' '+ this.lastName);
        var  person = this;
        function greet() {  console.log(this);
            console.log('Hi '+ person.firestName);
        }
        greet();
    }
};
var per1={
    firestName:'sara',
    lastName:'saber'
};
per.getFullName();
per1.getFullName=per.getFullName;
per1.getFullName();