export class RegexUtils {

    static regexEmail(email) {
        var regex = /^[a-z0-9]{3,64}@[a-z0-9]{3,30}[.]{1,1}.+[a-z0-9]{1,20}$/;
        return regex.test(email);
    }
}