import Quiz from "@/components/Quiz";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { GlobalSymbols } from "@/devlink/GlobalSymbols";
import { GlobalNavbar } from "@/devlink/GlobalNavbar";
import { GlobalFooter } from "@/devlink/GlobalFooter";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <GlobalSymbols />
      <GlobalNavbar />
      <Quiz />
      <GlobalFooter />
    </>
  );
}
