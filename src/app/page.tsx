import Home from "@/app/(routes)/Home/page"
import Head from "next/head";


export default function Main() {
  return (
   <>
    <Head>
        <link rel="icon" href="/logo.png" />
    </Head>
    <Home />
   </>
  );
}
