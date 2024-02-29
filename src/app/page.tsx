import Bot from "./nav/bot.main";
import Top from "./nav/top.main";
import AccessButton from "./utils/access-btn.utils";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Top />
      <AccessButton />
      <div className="fixed bottom-0 left-0 right-0 bg-black">
        <Bot />
      </div>
    </main>
  );
}
