import { defineConfig } from "vitepress";
import sidebar from "../_sidebar.json";

export default defineConfig({
    outDir: '../.build/docs',
    cacheDir: '../.build/temp',
    cleanUrls: true,

    title: 'QMK Firmware',
    description: 'Open-source keyboard firmware for Atmel AVR and Arm USB families',

    head: [['link', { rel: 'icon', href: '/logo.png' }]],

    themeConfig: {
        logo: '/logo.png',

        sidebar,

        nav: [
            { text: "Home", link: "/" },
            { text: "Keyboards", link: "https://github.com/qmk/qmk_firmware/tree/master/keyboards" },
            { text: "Docs", link: "https://docs.qmk.fm" }
        ],
        socialLinks: [
            { icon: "discord", link: "https://discord.gg/qmk" },
            { icon: "github", link: "https://github.com/qmk/qmk.fm" },
        ],
        footer: {
            message: 'This project is maintained by QMK collaborators and contributors like you!'
        }
    }
});
