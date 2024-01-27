import React from "react";
import { Layout } from "antd";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "10px 20px",
  fontSize: "20px",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  overflow: "hidden",
  minHeight: "100vh",
};
export const App = () => (
  <BrowserRouter>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}></Header>
      <Content style={contentStyle}>
        <Router />
      </Content>
      <Footer style={footerStyle}></Footer>
    </Layout>
  </BrowserRouter>
);
