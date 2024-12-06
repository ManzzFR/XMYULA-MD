let cooldowns = {};
let handler = async (m, { conn }) => {
    let sender = m.sender;
    let now = new Date().getTime();

    if (cooldowns[sender] && now - cooldowns[sender] < 5 * 60 * 1000) {
        let timeLeft = (5 * 60 * 1000 - (now - cooldowns[sender])) / 1000;
        return conn.reply(m.chat, `Anda masih dalam cooldown. Cobalah lagi setelah ${Math.ceil(timeLeft / 60)} menit.`, m);
    }
    cooldowns[sender] = now;

    // hadiah
    let rewards = {
        paypal: 5000,
        gopay: 15000,
        money: 15000,
        legendary: 75000
    };

    // hadiah acak
    let rewardType = ['paypal', 'gopay', 'money', 'legendary'];
    let reward = rewardType[Math.floor(Math.random() * rewardType.length)];
    let amount = rewards[reward];

    // ngakses data pengguna dari global.db
    let user = global.db.data.users[sender];

    if (!user[reward]) user[reward] = 0;

    user[reward] += amount;

    return conn.reply(m.chat, `🎉 *Selamat!* Anda berhasil menyelesaikan misi penyelamatan di desa!\nHadiah Anda: ${amount} ${reward.charAt(0).toUpperCase() + reward.slice(1)}\nTotal ${reward.charAt(0).toUpperCase() + reward.slice(1)} Anda sekarang: ${user[reward].toLocaleString()}`, m);
};

handler.help = ['rescue'];
handler.tags = ['game'];
handler.command = /^rescue$/i;

export default handler;