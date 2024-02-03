import Bot from "./nav/bot";
import Top from "./nav/top";
import AccessButton from "./utils/access-btn";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Top />
      <AccessButton />
      <Bot />
    </main>
  );
}
