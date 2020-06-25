
export class SignUpService {
    
    //Dividing the fields like the text, password and date,
    //for convenience.
     
    getTextTypeFields() {
        // can be replaced by network call.
        return [ "First Name", "Last Name", "Username", "Country" ];
    }

    getPasswordTypeFields() {
        return [ "Password" ];
    }

    getDateTypeFields() {
        return [ "DOB" ];
    }

}