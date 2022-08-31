import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParentPage from "./Pages/ParentPage";
import Signin from "./Pages/Signin";
import Childedit from "./Pages/Childedit";
import ChildPage from "./Pages/ChildPage";
import AboutUs from "./Pages/AboutUs";
import './App.css';
import './declaration.d.ts';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HtppApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { langs } from "./Pages/LangugeContext";
import { Dropdown, Typography, Space, Menu } from "antd";
import menu from "antd/lib/menu";
import AdminPage from "./Pages/AdminPage";
import { ethers } from "ethers";
import { getRole } from "./contract/functions";



i18n
  .use(HtppApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: langs.en
      },
      tr: {
        translation: langs.tr
      }
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export function ML(key: string) {
  return (
    <>{i18n.t(key)}</>
  )
}


export const supportedLanguages = [
  { flag: '🏳️TR', code: 'tr' },
  { flag: '🏳️EN', code: 'en' },
];





export function Language() {
  const selectedLanguage = supportedLanguages.find(x => x.code == i18n.language)


  return (

    <Dropdown overlay={<Menu>
      {supportedLanguages.map((language) => {
        return (
          <Menu.Item onClick={() => {
            i18n.changeLanguage(language.code)
            window.location.reload()
          }}>{language.flag}</Menu.Item>
        )
      })}
    </Menu>}>
      <Typography.Link>
        <Space>
          {selectedLanguage?.flag || i18n.language}
        </Space>
      </Typography.Link>
    </Dropdown>
  )
}

function App() {
  let navigate = useNavigate();

  useEffect(() => {

    const handleAccountsChanged = async (accounts: any) => {
      navigate('/');
    }

    // @ts-ignore
    window.ethereum.on('accountsChanged', handleAccountsChanged);


    const reload = async () => {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      let account = accounts[0];

      const signer = provider.getSigner(); // üst stırda geşen provider'dan hesabı çekiuyor
      const signerAddress = await signer.getAddress();

      provider.on('accountsChanged', (accounts: any) => { account = accounts[0]; window.location.reload(); });

    };
    reload();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/childedit" element={<Childedit />} />
      <Route path="/childpage" element={<ChildPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/aboutus' element={<AboutUs />} />

    </Routes>

  );
}

export default App;