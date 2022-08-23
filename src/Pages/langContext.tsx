import React from "react";

export const langs = {
    tr: {
        ad: 'İsim',
        soyad: 'Soyisim',
        giris: 'HAYDİ KAYDOL !',
        hosgeldin: 'Sayfamıza Hoşgeldiniz',
        kayıtol: 'Kayıt ol',
        checkbox: 'Beni hatırla'
    },

    en: {
        ad: 'Name',
        soyad: 'Surname',
        giris: 'LETS YOU SIGN IN',
        hosgeldin: 'Welcome to our page',
        kayıtol: 'Sign In',
        checkbox: 'Keep me logged in'
    }
}

const LangContext = React.createContext(langs.tr);
export default LangContext;