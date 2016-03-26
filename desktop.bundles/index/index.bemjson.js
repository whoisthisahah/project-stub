module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'head',
            mix: { block: 'box', js: true },
            content: [
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: {
                                tag: 'form',
                                attrs: { action: 'http://yandex.ru/yandsearch' },
                                content: [
                                    {
                                        block: 'input',
                                        name: 'text',
                                        placeholder: 'Ахаха не работает'
                                    },
                                    {
                                        block: 'button',
                                        type: 'submit',
                                        content: 'Search'
                                    }
                                ]
                            }
                        },
                        {
                            elem: 'right',
                            content: {
                                block: 'logo',
                                content: [
                                    {
                                        block: 'link',
                                        url: 'http://ru.bem.info',
                                        content: [
                                            {
                                                block: 'image',
                                                attrs: { src: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png' }
                                            },
                                            {
                                                elem: 'slogan',
                                                content: 'БЭМ от Яндекс, лол!'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'box',
                    elem: 'switcher'
                }
            ]
        },
        {
            block: 'goods',
            goods: [
                {
                    title: 'Apple iPhone 4S 32Gb',
                    image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                    price: '259',
                    url: '/'
                },
                {
                    title: 'Samsung Galaxy Ace S5830',
                    image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                    price: '73',
                    url: '/'
                },
                {
                    title: 'HTC One S',
                    image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                    price: '152',
                    url: '/'
                },
                {
                    title: 'Sharp SH530U',
                    image: 'http://mdata.yandex.net/i?path=b1119145405_img_id7474251838115767025.jpg',
                    price: '***',
                    url: '/',
                    new: true
                },
                {
                    title: 'Samsung Galaxy S III 16Gb',
                    image: 'http://mdata.yandex.net/i?path=b0503234231_img_id4954748565558111178.jpg',
                    price: '180',
                    url: '/'
                }
            ]
        }
    ]
};
