import fs from "fs"
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let user = global.db.data.users[who]
    const caption = `
▧「 *BANK CEK* 」
│ 👤 Name: ${user.registered ? user.name: conn.getName(m.sender)}
│ ${rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${rpg.emoticon('money')} Money: ${user.money}
│ ${rpg.emoticon('chip')} Chip: ${user.chip}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 Status: ${who.split`@`[0] == info.nomorown ? 'Developer': user.premiumTime >= 1 ? 'Premium User': user.level >= 1000 ? 'Elite User': 'Free User'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    await conn.adReply(m.chat, caption, '', '', fs.readFileSync('./media/bank.jpg'), '', m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^bank$/i

handler.register = true
handler.group = true
handler.rpg = true

export default handler


ム  *U S E R I N F O*

⋇  *Runtime* : [ 00:08:06 ]
⋇  *Premium* : ×
⋇  *Verifed* : ×
⋇  *Limit* : 25
⋇  *Level* : 1 (Warrior III ★✩✩)
⋇  *Rest Api* : api.aiko.my.id
⋇  *Information* : info.aiko.biz.id

┏  ֎  .ace *symbol*
┃  ֎  .alpaca *symbol*
┃  ֎  .ascendex *symbol*
┃  ֎  .bequant *symbol*
┃  ֎  .bigone *symbol*
┃  ֎  .binance *symbol*
┃  ֎  .binancecoinm *symbol*
┃  ֎  .binanceus *symbol*
┃  ֎  .binanceusdm *symbol*
┃  ֎  .bingx *symbol*
┃  ֎  .bit2c *symbol*
┃  ֎  .bitbank *symbol*
┃  ֎  .bitbns *symbol*
┃  ֎  .bitfinex *symbol*
┃  ֎  .bitfinex2 *symbol*
┃  ֎  .bitforex *symbol*
┃  ֎  .bitget *symbol*
┃  ֎  .bithumb *symbol*
┃  ֎  .bitmart *symbol*
┃  ֎  .bitmex *symbol*
┃  ֎  .bitopro *symbol*
┃  ֎  .bitpanda *symbol*
┃  ֎  .bitrue *symbol*
┃  ֎  .bitso *symbol*
┃  ֎  .bitstamp *symbol*
┃  ֎  .bitstamp1 *symbol*
┃  ֎  .bittrex *symbol*
┃  ֎  .bitvavo *symbol*
┃  ֎  .bl3p *symbol*
┃  ֎  .blockchaincom *symbol*
┃  ֎  .btcalpha *symbol*
┃  ֎  .btcbox *symbol*
┃  ֎  .btcmarkets *symbol*
┃  ֎  .btctradeua *symbol*
┃  ֎  .bybit *symbol*
┃  ֎  .cex *symbol*
┃  ֎  .coinbase *symbol*
┃  ֎  .coinbaseprime *symbol*
┃  ֎  .coinbasepro *symbol*
┃  ֎  .coincheck *symbol*
┃  ֎  .coinex *symbol*
┃  ֎  .coinfalcon *symbol*
┃  ֎  .coinmate *symbol*
┃  ֎  .coinone *symbol*
┃  ֎  .coinsph *symbol*
┃  ֎  .coinspot *symbol*
┃  ֎  .cryptocom *symbol*
┃  ֎  .currencycom *symbol*
┃  ֎  .delta *symbol*
┃  ֎  .deribit *symbol*
┃  ֎  .digifinex *symbol*
┃  ֎  .exmo *symbol*
┃  ֎  .fmfwio *symbol*
┃  ֎  .gate *symbol*
┃  ֎  .gemini *symbol*
┃  ֎  .hitbtc *symbol*
┃  ֎  .hollaex *symbol*
┃  ֎  .huobi *symbol*
┃  ֎  .huobijp *symbol*
┃  ֎  .idex *symbol*
┃  ֎  .independentreserve *symbol*
┃  ֎  .indodax *symbol*
┃  ֎  .kraken *symbol*
┃  ֎  .krakenfutures *symbol*
┃  ֎  .kucoin *symbol*
┃  ֎  .kucoinfutures *symbol*
┃  ֎  .kuna *symbol*
┃  ֎  .latoken *symbol*
┃  ֎  .lbank *symbol*
┃  ֎  .lbank2 *symbol*
┃  ֎  .luno *symbol*
┃  ֎  .lykke *symbol*
┃  ֎  .mercado *symbol*
┃  ֎  .mexc *symbol*
┃  ֎  .ndax *symbol*
┃  ֎  .novadax *symbol*
┃  ֎  .oceanex *symbol*
┃  ֎  .okcoin *symbol*
┃  ֎  .okx *symbol*
┃  ֎  .paymium *symbol*
┃  ֎  .phemex *symbol*
┃  ֎  .poloniex *symbol*
┃  ֎  .poloniexfutures *symbol*
┃  ֎  .probit *symbol*
┃  ֎  .tidex *symbol*
┃  ֎  .timex *symbol*
┃  ֎  .tokocrypto *symbol*
┃  ֎  .upbit *symbol*
┃  ֎  .wavesexchange *symbol*
┃  ֎  .wazirx *symbol*
┃  ֎  .whitebit *symbol*
┃  ֎  .woo *symbol*
┃  ֎  .yobit *symbol*
┃  ֎  .zaif *symbol*
┗  ֎  .zonda *symbol*

ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʀᴀᴋᴀᴀ ッ
© ᴀɪᴋᴏʙᴏᴛᴢ v5.0.0