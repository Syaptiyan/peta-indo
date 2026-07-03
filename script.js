function app() {
    return {
        provinces: [
            {id:'aceh',name:'Aceh',ibu_kota:'Banda Aceh',luas:'57.956 km²',penduduk:'5,3 juta',pulau:'Sumatera'},
            {id:'sumut',name:'Sumatera Utara',ibu_kota:'Medan',luas:'72.981 km²',penduduk:'15,1 juta',pulau:'Sumatera'},
            {id:'sumbar',name:'Sumatera Barat',ibu_kota:'Padang',luas:'42.013 km²',penduduk:'5,5 juta',pulau:'Sumatera'},
            {id:'riau',name:'Riau',ibu_kota:'Pekanbaru',luas:'87.024 km²',penduduk:'6,9 juta',pulau:'Sumatera'},
            {id:'jambi',name:'Jambi',ibu_kota:'Jambi',luas:'50.058 km²',penduduk:'3,6 juta',pulau:'Sumatera'},
            {id:'sumsel',name:'Sumatera Selatan',ibu_kota:'Palembang',luas:'91.592 km²',penduduk:'8,5 juta',pulau:'Sumatera'},
            {id:'bengkulu',name:'Bengkulu',ibu_kota:'Bengkulu',luas:'19.919 km²',penduduk:'2,0 juta',pulau:'Sumatera'},
            {id:'lampung',name:'Lampung',ibu_kota:'Bandar Lampung',luas:'34.624 km²',penduduk:'9,0 juta',pulau:'Sumatera'},
            {id:'kepri',name:'Kepulauan Riau',ibu_kota:'Tanjung Pinang',luas:'8.202 km²',penduduk:'2,1 juta',pulau:'Sumatera'},
            {id:'babel',name:'Bangka Belitung',ibu_kota:'Pangkal Pinang',luas:'16.424 km²',penduduk:'1,5 juta',pulau:'Sumatera'},
            {id:'banten',name:'Banten',ibu_kota:'Serang',luas:'9.663 km²',penduduk:'12,6 juta',pulau:'Jawa'},
            {id:'dki',name:'DKI Jakarta',ibu_kota:'Jakarta',luas:'662 km²',penduduk:'10,6 juta',pulau:'Jawa'},
            {id:'jabar',name:'Jawa Barat',ibu_kota:'Bandung',luas:'35.378 km²',penduduk:'49,9 juta',pulau:'Jawa'},
            {id:'jateng',name:'Jawa Tengah',ibu_kota:'Semarang',luas:'32.801 km²',penduduk:'37,0 juta',pulau:'Jawa'},
            {id:'jogja',name:'DI Yogyakarta',ibu_kota:'Yogyakarta',luas:'3.133 km²',penduduk:'3,8 juta',pulau:'Jawa'},
            {id:'jatim',name:'Jawa Timur',ibu_kota:'Surabaya',luas:'47.800 km²',penduduk:'40,7 juta',pulau:'Jawa'},
            {id:'kalbar',name:'Kalimantan Barat',ibu_kota:'Pontianak',luas:'147.307 km²',penduduk:'5,4 juta',pulau:'Kalimantan'},
            {id:'kalteng',name:'Kalimantan Tengah',ibu_kota:'Palangkaraya',luas:'153.565 km²',penduduk:'2,7 juta',pulau:'Kalimantan'},
            {id:'kalsel',name:'Kalimantan Selatan',ibu_kota:'Banjarmasin',luas:'38.744 km²',penduduk:'4,1 juta',pulau:'Kalimantan'},
            {id:'kaltim',name:'Kalimantan Timur',ibu_kota:'Samarinda',luas:'129.067 km²',penduduk:'3,8 juta',pulau:'Kalimantan'},
            {id:'kaltara',name:'Kalimantan Utara',ibu_kota:'Tanjung Selor',luas:'75.468 km²',penduduk:'0,7 juta',pulau:'Kalimantan'},
            {id:'sulut',name:'Sulawesi Utara',ibu_kota:'Manado',luas:'13.852 km²',penduduk:'2,6 juta',pulau:'Sulawesi'},
            {id:'sulteng',name:'Sulawesi Tengah',ibu_kota:'Palu',luas:'61.841 km²',penduduk:'3,0 juta',pulau:'Sulawesi'},
            {id:'sulsel',name:'Sulawesi Selatan',ibu_kota:'Makassar',luas:'46.717 km²',penduduk:'9,1 juta',pulau:'Sulawesi'},
            {id:'sultra',name:'Sulawesi Tenggara',ibu_kota:'Kendari',luas:'38.068 km²',penduduk:'2,7 juta',pulau:'Sulawesi'},
            {id:'gorontalo',name:'Gorontalo',ibu_kota:'Gorontalo',luas:'11.257 km²',penduduk:'1,2 juta',pulau:'Sulawesi'},
            {id:'sulbar',name:'Sulawesi Barat',ibu_kota:'Mamuju',luas:'16.787 km²',penduduk:'1,4 juta',pulau:'Sulawesi'},
            {id:'bali',name:'Bali',ibu_kota:'Denpasar',luas:'5.780 km²',penduduk:'4,3 juta',pulau:'Bali & NT'},
            {id:'ntb',name:'Nusa Tenggara Barat',ibu_kota:'Mataram',luas:'18.572 km²',penduduk:'5,3 juta',pulau:'Bali & NT'},
            {id:'ntt',name:'Nusa Tenggara Timur',ibu_kota:'Kupang',luas:'48.718 km²',penduduk:'5,6 juta',pulau:'Bali & NT'},
            {id:'maluku',name:'Maluku',ibu_kota:'Ambon',luas:'46.914 km²',penduduk:'1,9 juta',pulau:'Maluku'},
            {id:'malut',name:'Maluku Utara',ibu_kota:'Sofifi',luas:'31.982 km²',penduduk:'1,3 juta',pulau:'Maluku'},
            {id:'papbar',name:'Papua Barat',ibu_kota:'Manokwari',luas:'99.672 km²',penduduk:'1,1 juta',pulau:'Papua'},
            {id:'papua',name:'Papua',ibu_kota:'Jayapura',luas:'319.036 km²',penduduk:'4,3 juta',pulau:'Papua'},
            {id:'papteng',name:'Papua Tengah',ibu_kota:'Nabire',luas:'119.148 km²',penduduk:'1,2 juta',pulau:'Papua'},
            {id:'papsel',name:'Papua Selatan',ibu_kota:'Merauke',luas:'127.231 km²',penduduk:'0,5 juta',pulau:'Papua'},
            {id:'papgun',name:'Papua Pegunungan',ibu_kota:'Wamena',luas:'82.681 km²',penduduk:'1,4 juta',pulau:'Papua'},
            {id:'papbarat',name:'Papua Barat Daya',ibu_kota:'Sorong',luas:'34.422 km²',penduduk:'0,6 juta',pulau:'Papua'}
        ],
        filtered: [],
        q: '',
        selected: null,
        scrolled: false,
        init() {
            this.filtered = [...this.provinces];
            window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 50; });
        },
        filter() {
            const q = this.q.toLowerCase();
            this.filtered = this.provinces.filter(p => p.name.toLowerCase().includes(q) || (p.ibu_kota || '').toLowerCase().includes(q));
        },
        selectProv(id) {
            this.selected = this.provinces.find(p => p.id === id);
            document.querySelectorAll('.province').forEach(el => el.classList.remove('active'));
            document.querySelector(`[data-provinsi="${id}"]`)?.classList.add('active');
        }
    };
}

function closeMenu() {
    document.querySelector('.hamburger')?.classList.remove('active');
    document.querySelector('.nav-menu')?.classList.remove('show');
}
