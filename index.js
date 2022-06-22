import { roles_Strategy2 } from "./apps/roles_Strategy2.js";
import { roles_Strategy3 } from "./apps/roles_Strategy3.js";
import { yiyiversion } from "./apps/help.js";

export {
  roles_Strategy2,
  roles_Strategy3,
  yiyiversion
};


let rule = {
  roles_Strategy2: {
    reg: "^#*[^-~]+攻略2+$",
    describe: "【#角色攻略2】获取第二份已有角色攻略概览",
  },
  roles_Strategy3: {
    reg: "^#*[^-~]+攻略3+$",
    describe: "【#角色攻略2】获取第三份已有角色攻略概览",
  },
  yiyiversion: {
    reg: "^#?伊伊版本$",
    describe: "伊伊版本",
},
};

export { rule };

console.log(`伊伊插件${yiyiVersion}初始化~`);

setTimeout(async function () {
  let msgStr = await redis.get("yiyi:restart-msg");
  if (msgStr) {
    let msg = JSON.parse(msgStr);
    await common.relpyPrivate(msg.qq, msg.msg);
    await redis.del("yiyi:restart-msg");
    let msgs = [`当前伊伊版本: ${yiyiVersion}`, `您可使用 #伊伊版本 命令查看更新信息`];
    await common.relpyPrivate(msg.qq, msgs.join("\n"));
  }
}, 1000);