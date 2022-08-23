import React from "react";

export const langs = {
    tr: {
        ad: 'İsim',
        soyad: 'Soyisim',
        giris: 'HAYDİ KAYDOL !',
        hosgeldin: 'Sayfamıza Hoşgeldiniz',
        kayıtol: 'Kayıt ol',
        checkbox: 'Beni hatırla',
        homePageGiris : "InTeritance'a ",
        homePageGiris1 : "hoş geldiniz  ",
        appInfo : 'InTeritance çocuğunuzun büyümesine eşlik edecek bir birikim uygulamasıdır. InTeritance size sunduğu esnek fonksiyonlarla çocuğunuzun hayattaki dönüm noktalarına destek olabilir , geleceğini şekillendirebilirsiniz.',
        first : 'Bir metamask cüzdanınız olması gerekir.',
        first_  : 'Bir metamask hesabınız yoksa, buraya tıklayın.',
        second : 'Cüzdanınızda belirli bir miktar ethereum olmalıdır.',
        third : 'Çocuklarınızın hesaplarını oluşturun ve ayarlayın.',
        fourth : 'Çocuklarınızın hesaplarını dilediğiniz gibi yönetebilir, dilediğiniz kadar yatırım yapabilirsiniz.',
        fifth : 'Belirlediğiniz tarih geldiğinde çocuğunuz cüzdanına erişebilecek.',
        lohinwm : 'Metamask ile giriş yap',
        erisimTarihi : 'Erişim Tarihi',
        walletAdres : 'Çocuğun wallet adresi'

    },

    en: {
        ad: 'Name',
        soyad: 'Surname',
        giris: 'LETS YOU SIGN IN',
        hosgeldin: 'Welcome to our page',
        kayıtol: 'Sign In',
        checkbox: 'Keep me logged in',
        homePageGiris : ' InTeritance ',
        homePageGiris1 : 'Welcome to ',
        appInfo :'InTeritance is a saving app that accompanies your childs growth.  You can support your children’s milestones with the flexible functions our app offers you and shape your children’s future',
        first : 'You need to have a metamask wallet.',
        first_ : "If you don't have a metamask account, click here.",
        second : 'You must have a certain amount of ethereum in your wallet.',
        third : "Create and set up your children's accounts.",
        fourth : 'You can manage your children’s accounts as you wish and invest as much as you want.',
        fifth : 'When the date you set comes, your child will have access to their wallet.',
        lohinwm : 'Login with Metamask',
        erisimTarihi : 'Date of Access',
        walletAdres : 'Wallet address of child'
    }
}

const LangContext = React.createContext(langs.tr);
export default LangContext;