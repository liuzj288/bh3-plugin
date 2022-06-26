import { versionInfo } from "./apps/help.js";
import { version } from "./components/Changelog.js";
import { roles_Strategy2 } from "./apps/roles_Strategy2.js";
import { roles_Strategy3 } from "./apps/roles_Strategy3.js";


export {
  roles_Strategy2,
  roles_Strategy3,
  versionInfo
};


let rule = {
  roles_Strategy2: {
    reg: "^#*[^-~]+乐土攻略+$",
    describe: "【#乐土攻略】乐土攻略",
  },
  roles_Strategy3: {
    reg: "^#*[^-~]+攻略3+$",
    describe: "【#角色攻略2】获取第三份已有角色攻略概览",
  },
  versionInfo: {
    reg: "^#?伊伊版本$",
    describe: "伊伊版本",
},
};

export { rule };

console.log(`伊伊插件${version}初始化~`);

setTimeout(async function () {
  let msgStr = await redis.get("yiyi:restart-msg");
  if (msgStr) {
    let msg = JSON.parse(msgStr);
    await common.relpyPrivate(msg.qq, msg.msg);
    await redis.del("yiyi:restart-msg");
    let msgs = [`当前伊伊版本: ${version}`, `您可使用 #伊伊版本 命令查看更新信息`];
    await common.relpyPrivate(msg.qq, msgs.join("\n"));
  }
}, 1000);
