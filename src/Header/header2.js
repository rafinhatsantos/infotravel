import Head from 'next/head';
import './Header.css';
import Link from 'next/link';

export default function Header2() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
 
      <header className="parent2">
        <div className="parent2">
          
        
        <Link href="/">  
         <div className="titulo2" >infotravel </div>     </Link>     
         <Link href="/">  <div className="home">home</div> </Link> 
          <div className="login2">iniciar sessão</div>
        </div>
      </header>
    </>
  );
}