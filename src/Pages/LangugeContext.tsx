import React from "react";

export const langs = {
    tr: {
        //signin
        ad: 'İsim',
        soyad: 'Soyisim',
        giris: 'HAYDİ KAYDOL !',
        hosgeldin: 'Sayfamıza Hoşgeldiniz',
        kayıtol: 'Kayıt ol',
        checkbox: 'Beni hatırla',
        //homepage
        homePageGiris: "InTeritance'a ",
        homePageGiris1: "Hoş geldiniz  ",
        need: 'Neye ihtiyacınız var',
        appInfo: 'InTeritance çocuğunuzun büyümesine eşlik edecek bir birikim uygulamasıdır. InTeritance size sunduğu esnek fonksiyonlarla çocuğunuzun hayattaki dönüm noktalarına destek olabilir , geleceğini şekillendirebilirsiniz.',
        first: 'Bir',
        first__: 'cüzdanınız olması gerekir.',
        first_: 'Bir metamask hesabınız yoksa,',
        second: 'Cüzdanınızda belirli bir miktar',
        second_: 'olmalıdır.',
        third: 'Çocuklarınızın hesaplarını oluşturun ve ayarlayın.',
        fourth: 'Çocuklarınızın hesaplarını dilediğiniz gibi yönetebilir, dilediğiniz kadar yatırım yapabilirsiniz.',
        fifth: 'Belirlediğiniz tarih geldiğinde çocuğunuz cüzdanına erişebilecek.',
        loginwm: ' Metamask ile giriş yap',
        dildesgis: 'Dil değiştir',
        clickhere: 'Buraya tıklayın.',
        //childedit
        erisimTarihi: 'Erişim Tarihi',
        walletAdres: 'Çocuğun cüzdan adresi',
        kaydet: 'Kaydet',
        degistir: 'Değiştir',
        childeditbutton: 'Geri çek(çocuk)',
        //childpage
        user: 'Hoşgeldiniz',
        geriCek: 'Parayı geri çek',
        tumParayıCek: 'Tüm parayı çek',
        miktar: 'Çekilecek miktarı giriniz.',
        tarih:'Paranın çekilebileceği tarih;',
        //parentpage
        cocukekle: 'Çocuk ekle',
        cocuksil: 'Çocuk sil',
        send: 'Gönder',
        yourWallet: 'Senin cüzdanın',
        withdraweth : 'Ethereumu geri çek',
        sendeth: 'Ethereum gönder',
        withdrawback : 'Geri çek',
        para: 'Mevcut Para(ETH)',
        gönderilen: 'Gönderilen Miktar(ETH)',
        tutar: 'Gönderilecek / Çekilecek Tutar',
        adres: 'Cüzdan Adresi',
        //ethprice
        ethprice: 'Ethereum Fiyatı',
        block: 'Blok gezgininde görüntüle'
    },

    en: {
        //signin
        ad: 'Name',
        soyad: 'Surname',
        giris: 'LETS SIGN YOU UP',
        hosgeldin: 'Welcome to our page',
        kayıtol: 'Sign Up',
        checkbox: 'Keep me logged in',
        //homepage
        homePageGiris: ' InTeritance ',
        homePageGiris1: 'Welcome  ',
        need: 'What do you need',
        appInfo: 'InTeritance is a saving app that accompanies your childs growth.  You can support your children’s milestones with the flexible functions our app offers you and shape your children’s future',
        first: 'You need to have a ',
        first__: 'wallet.',
        first_: "If you don't have a metamask account, ",
        second: 'You must have a certain amount of',
        second_: 'in your wallet.',
        third: "Create and set up your children's accounts.",
        fourth: 'You can manage your children’s accounts as you wish and invest as much as you want.',
        fifth: 'When the date you set comes, your child will have access to their wallet.',
        loginwm: 'Login with Metamask',
        dildesgis: 'Change language',
        clickhere: 'Click here.',
        //childedit
        erisimTarihi: 'Date of Access',
        walletAdres: 'Wallet address of the child',
        kaydet: 'Save',
        degistir: 'Change',
        childeditbutton: 'Withdraw(Child)',
        //childpage
        user: 'Welcome',
        geriCek: 'Withdraw money',
        tumParayıCek: 'Withdraw all money',
        miktar:'Enter the amount of to withdraw',
        tarih: 'The date the money can be withdrawn',
        //parentpage
        cocukekle: 'Add child',
        cocuksil: 'Delete child',
        send: 'Send',
        money: 'Current amonunt of money',
        yourWallet: 'Your wallet',
        withdraweth : 'Withdraw Ethereum',
        sendeth: 'Send ethereum',
        withdrawback : 'Withdraw Back',
        para: 'Current Money(ETH)',
        gönderilen: 'Total Given(ETH)',
        tutar: 'Amount To Be Sent / Withdrawn',
        adres: 'Wallet Address',
        ethprice: 'Ethereum Price',
        block: 'View in block explorer'

    }
}

const LangContext = React.createContext(langs.tr);
export default LangContext;