export default function UsePascalCase(str){
    var firstCharacter=str.charAt(0).toUpperCase();
    var restCharacters=str.substring(1).toLowerCase();
    var word=firstCharacter+restCharacters
    return word
}