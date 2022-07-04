
const app = new Vue (
    {
        el:'#root',

        data: {
            titleTextInH1: '',
            imageToHtml: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Foto_Shiba_Inu_.jpg/1200px-Foto_Shiba_Inu_.jpg',
            imageAfterClick: '',
        },

        methods: {
            clickToDisplayImg: function() {
                this.imageAfterClick = this.imageToHtml;
                return;
            },
        }
    }

);
