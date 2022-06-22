import lodash from "lodash";
import { segment } from "oicq";
import fs from "fs";
import { yiyiversion } from "../components/Changelog.js";

const _path = process.cwd();

export const rule = {
  yiyiversion: {
    reg: "^#?伊伊版本$",
    priority: 100,
    describe: "伊伊版本",
  },
};

export function yiyiversion(e) {
  e.reply(`当前版本：v${version}`);
  return true;
}