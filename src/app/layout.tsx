'use client'
import { Layout, theme } from 'antd';
import { SideMenu } from './components/SideMenu';
import "./globals.css";

const { Header, Content, Footer, Sider } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html lang="en">
      <body>
        <Layout className='dashboard' hasSider>
          <Sider
          >
            <SideMenu />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content>
              <section className='flex justify-center h-screen'>
                {children}
              </section>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Jimz Designs ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
