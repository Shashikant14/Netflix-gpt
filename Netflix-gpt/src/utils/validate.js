

export const checkValid = (email,password) => {
    const checkemail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const checkpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!checkemail){ return "Email Id is not valid" } ;
    if(!checkpassword) {return "Password is not valid"} ;

    return null;

}