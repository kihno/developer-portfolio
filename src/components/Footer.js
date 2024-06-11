import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout classname="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights Reserved.</span>
        <div className="flex items-center">
          Built with 
          <span className="text-primary text-2xl px-1">&#9825;</span> 
          by&nbsp;
          <Link href='https://github.com/kihno' className="underline underline-offset-2">Kihno</Link>
        </div>
        <Link href='mailto:nmiles13@gmail.com' className="underline underline-offset-2">Say hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
