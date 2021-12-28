// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'The Anansi Project',
    tagline: 'A collection of software initiatives around comics & books',
    url: 'https://anansi-project.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'anansi-project', // Usually your GitHub org/user name.
    projectName: 'anansi-project.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    // i18n: {
    //   defaultLocale: 'en',
    //   locales: ['en', 'fr'],
    // },

    plugins: [
        [
            'docusaurus-plugin-remote-content',
            {
                // options here
                name: 'comicinfo', // used by CLI, must be path safe
                sourceBaseUrl: 'https://raw.githubusercontent.com/anansi-project/comicinfo/main/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/comicinfo/_remote', // the base directory to output to.
                documents: ['CHANGELOG.md', 'drafts/v2.1/ComicInfo.xsd', 'schema/v2.0/ComicInfo.xsd', 'schema/v1.0/ComicInfo.xsd'], // the file names to download
                noRuntimeDownloads: true,
            },
        ],
        [
            'docusaurus-plugin-remote-content',
            {
                // options here
                name: 'opds-pse', // used by CLI, must be path safe
                sourceBaseUrl: 'https://raw.githubusercontent.com/anansi-project/odps-pse/master/', // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: 'docs/opds-pse/_remote', // the base directory to output to.
                documents: ['CHANGELOG.md', 'v1.0.md', 'v1.1.md'], // the file names to download
                noRuntimeDownloads: true,
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/anansi-project/anansi-project.github.io/edit/main/',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl:
                //         'https://github.com/facebook/anansi-project.github.io/edit/main/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'The Anansi Project',
                logo: {
                    alt: 'Anansi Project Logo',
                    src: 'img/spider.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introduction',
                        position: 'left',
                        label: 'Documentation',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    // {
                    //   type: 'localeDropdown',
                    //   position: 'right',
                    // },
                    {
                        href: 'https://github.com/anansi-project',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'The Anansi Project',
                                to: '/docs/introduction',
                            },
                            {
                                label: 'OPDS Page Streaming Extension',
                                to: '/docs/opds-pse/intro',
                            },
                            {
                                label: 'ComicInfo',
                                to: '/docs/comicinfo/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/ZQbW3aXU',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // {
                            //     label: 'Blog',
                            //     to: '/blog',
                            // },
                            {
                                label: 'Credits',
                                to: '/credits',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/anansi-project',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} The Anansi Project. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                respectPrefersColorScheme: true,
            },
        }),
}

module.exports = config
