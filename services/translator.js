import translate from 'translate-google'
import dotenv from 'dotenv'
dotenv.config()

function translator(phrase,lang) {
    translate.key = process.env.googleapikey;
    return translate(phrase, { to: lang });
}

export default translator