import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Software } from "~/assets/data";
import style from "./style.module.scss";
import { publish } from "~/event";
import { useState } from "react";
import { Link } from "react-router-dom";

const SoftwarePure: React.FC<{ software: Software }> = ({ software }) => {
  const handleInstall = () => {
    publish("onInstall", {
      name: software.name,
      version: software.versions[0].code,
    });
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className={style.wrap}>
      <Link to={`/${software.name}`} className={style.link}></Link>

      <img src={software.logo} className={style.logo} alt="" />

      <main className={style.main}>
        <div className={style.info}>
          <h3 className={style.name}>{software.name}</h3>

          <Button className={style.install} onClick={handleInstall}>
            安装
          </Button>

          <IconButton className={style.more} onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            onClose={handleClose}
            className={style.menu}
          >
            <MenuItem dense className={style.menu_item}>
              关于 {software.name}
            </MenuItem>
            <MenuItem dense className={style.menu_item}>
              可用版本
            </MenuItem>
          </Menu>
        </div>

        {/* 状态和描述 */}
        <div className={style.status}>
          <p className={style.description}>{software.description}</p>
        </div>
      </main>
    </section>
  );
};

export default SoftwarePure;
