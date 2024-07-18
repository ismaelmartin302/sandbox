class TransformScripts {

    static encriptBasic(text) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let alphabetArray = []
        for (let index = 0; index < alphabet.length; index++) {
            alphabetArray.push(alphabet[index]);
        }

        let alterText = ""
        for (let index = 0; index < text.length; index++) {
            let value = alphabetArray.indexOf(text[index]);
            if (value == alphabetArray.length) {
                value = 0
            }
            alterText += alphabetArray[value + 1]
        }

        return alterText
    }
}


export { TransformScripts }