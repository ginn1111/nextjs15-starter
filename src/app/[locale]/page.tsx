import { getTranslations } from "next-intl/server";

const Main = async () => {
  const t = await getTranslations();

  return <h1>{t("main")}</h1>;
};

export default Main;
