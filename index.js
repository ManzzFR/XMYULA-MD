import { spawn } from 'child_process';
import _0x16d11b from 'path';
import 'console';
import 'util';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const sleep = _0x587f6a => {
  return new Promise(_0x1df7c0 => setTimeout(_0x1df7c0, _0x587f6a));
};
import _0x20dba9 from 'cfonts';
import _0x4c2f7d from 'chalk';
console.clear();
const __dirname = dirname(fileURLToPath(import.meta.url));
const start = async () => {
  const _0x3160dd = [_0x16d11b.join(__dirname, "main.js"), ...process.argv.slice(0x2)];
  const _0x31afef = spawn(process.argv[0x0], _0x3160dd, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  });
  _0x31afef.on('exit', _0x576095 => {
    console.error("❎ Exited with code:", _0x576095);
    if (_0x576095 === '.' || _0x576095 === 0x1 || _0x576095 === 0x0) {
      start();
    }
  });
};
await sleep(0x7d0);
_0x20dba9.say("\n\nAstrobot MD\n", {
  'font': "tiny",
  'align': 'center',
  'gradient': ['red', "blue"]
});
_0x20dba9.say("Simple Whatsapp Bot Use QR Code & Pairing Code\nWith Baileys Library\n\nSc asal: github.com/XM4ZE\nRecode dikit: github.com/ManzzFR\nTelegram: ManzzFR (@ManzzFR)\nReq fitur/error lapor aja\n\nMakasih buat XM4ZE\nIzin Rename", {
  'font': "console",
  'align': "center",
  'colors': ["blue"]
});
console.log(_0x4c2f7d.bold.green("\n Thank you for using this script.\nPlease do not sell this script because this script is free."));
start();