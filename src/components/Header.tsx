import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

const styles: Record<string, CSSProperties> = {
  headerDiv: {
    backgroundColor: "black",
  },
  headerSubDiv: {
    margin: "10px",
    color: "white",
  },
  logo: {
    paddingRight: "10px",
  },
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      style={styles.headerDiv}
      className="d-flex justify-content-between border-bottom"
    >
      <div style={styles.headerSubDiv}>
        <h3>{t("welcome")}</h3>
      </div>
      <div style={styles.headerSubDiv}>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
