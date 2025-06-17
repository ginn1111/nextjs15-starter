import { Button } from "@/shared/ui/button";
import { getTranslations } from "next-intl/server";

const Main = async () => {
  const t = await getTranslations();

  return (
    <div>
      <h1>{t("main")}</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default Main;
