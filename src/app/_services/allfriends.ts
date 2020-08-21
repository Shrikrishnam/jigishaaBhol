export class allfriends{
    inr: number;
    paisa: number;
    // date: string;
    streetaddress: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    phonenumber: number;
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    trainerpreference: string;
    physiotherapist: string;
    packages: string;
    // id: number;

    constructor(firstname,lastname, packages,physiotherapist,trainerpreference, age,email,phonenumber,
        pincode,country,state,city,streetaddress,inr,paisa){
        // this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.packages=packages;
        this.phonenumber=phonenumber;
        this.physiotherapist=physiotherapist;
        this.trainerpreference=trainerpreference;
        this.age=age;
        this.email=email;
        this.pincode=pincode;
        this.country=country;
        this.state=state;
        this.city=city;
        this.streetaddress=streetaddress;
        // this.date=date;
        this.inr=inr;
        this.paisa= paisa;
    }
}

export class editfriends{
    inr: number;
    paisa: number;
    // date: string;
    streetaddress: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    phonenumber: number;
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    trainerpreference: string;
    physiotherapist: string;
    packages: string;
    id: number;

    constructor(id,firstname,lastname, packages,physiotherapist,trainerpreference, age,email,phonenumber,
        pincode,country,state,city,streetaddress,inr,paisa){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.packages=packages;
        this.phonenumber=phonenumber;
        this.physiotherapist=physiotherapist;
        this.trainerpreference=trainerpreference;
        this.age=age;
        this.email=email;
        this.pincode=pincode;
        this.country=country;
        this.state=state;
        this.city=city;
        this.streetaddress=streetaddress;
        // this.date=date;
        this.inr=inr;
        this.paisa= paisa;
    }
}

export class contact{
    firstname: string;
    lastname: string;
    phonenumber: number;
    email: string;
    message: string;

    constructor(firstname, lastname, phonenumber, email, mesage){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.message = this.message;
    }
}