import image from './assets/image.png';

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на JavaScript',
        options: {
            tag: 'h2',
            styles: {
                background: `linear-gradient(to right, #ff0099, #493240)`,
                color: `#ffffff`,
                'text-align': `center`,
                padding: `1.5rem`
            }
        }
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
        },
        imageStyles: {},
        alt: ''
    },
    {
        type: 'text',
        value: 'И это еще только начало. Присоединяйся!',
        options: {
            tag: 'p',
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'columns',
        value: [
            'Приложение на чистом JavaScript, без использования библиотек',
            'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    },
];