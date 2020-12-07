import React from "react";
import s from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  const [search, setSearch] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname !== "/") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  });
  return (
    <div className={s.container}>
      {search && (
        <Link href="/">
          <a>Atras</a>
        </Link>
      )}
    </div>
  );
};

export default Header;
