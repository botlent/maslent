
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',

}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0da1b6126724',
}



// Other
global.owner = ['6285655620413' ]
global.ownernomer = "6285655620413"
global.premium = ['6285655620413']
global.packname = 'tobot'
global.author = 'tobias'
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.namebotmu = 'TOBOT V2'
global.tutorial = 'https://www.youtube.com'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    verify: 'Daftar Dulu Kk, Cara Daftar nya Ketik .menu',
    owner: 'Fitur Khusus Owner Bot',
    api: 'Mungkin Api Nya Eror cok?',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu Sebentarβ³',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

global.mygit = 'https://github.com/xnxx.com'
global.myyt = 'https://youtube.com/@Lenttobs'
global.myytv = 'https://youtube.com/@Lenttobs'
global.botname = 'TOBOT V2'
global.akulaku = 'TOBOT'
global.ytname = 'tobot'
global.emot = {
role: 'π',
level: 'ποΈ',
limit: 'π',
health: 'β€οΈ',
exp: 'π«',
money: 'π΅',
potion: 'π₯€',
diamond: 'π',
common: 'π¦',
uncommon: 'π',
mythic: 'π³οΈ',
legendary: 'ποΈ',
pet: 'π',
trash: 'π',
armor: 'π',
sword: 'βοΈ',
wood: 'πͺ΅',
batu: 'πͺ¨',
string: 'πΈοΈ',
horse: 'π',
cat: 'π',
dog: 'π',
fox: 'π¦',
petFood: 'π',
iron: 'βοΈ',
gold: 'π',
emerald: 'π',
budak: 'π',
busur: 'πΉ',
panah: 'π',
kapak: 'πͺ'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
