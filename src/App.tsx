import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParentPage from "./Pages/ParentPage";
import Signin from "./Pages/Signin";
import Childedit from "./Pages/Childedit";
import ChildPage from "./Pages/ChildPage";
import './App.css';
import './declaration.d.ts';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HtppApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { langs } from "./Pages/LangugeContext";
import { Dropdown, Typography, Space, Menu } from "antd";
import menu from "antd/lib/menu";
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
  { flag: 'TR', code: 'tr' },
  { flag: 'EN', code: 'en' },
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
  const [role, setRole] = useState();

  useEffect(() => {
    const gettingRole = async () => {
      const response = await getRole();
      setRole(response);
    }
    gettingRole();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {role === "parent" &&
        <>
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/childedit" element={<Childedit />} />
        </>
      }

      <Route path="/signin" element={<Signin />} />
      {role === "child" &&
        <>
          <Route path="/childpage" element={<ChildPage />} />

        </>
      }
      <Route path="/signin" element={<Signin />} />
    </Routes>

  );
}

export default App;