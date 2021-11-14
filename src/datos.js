db.artesanas.drop()
db.artesanas.insertMany([
    {
        _id: 1,
        nombre: "Mexican Cerveza",
        tipo: "Lager palida",
        origen: "Mexicano",
        caracteristicas:{
            ibus: 23.5, 
            graduacion: 4.6, 
            ebc: 5.1
        },
        ingredientes:{
            malta:{
                base:    "Pilsner",  cant: 3.86,
                especial:"Carapils", cant: 0.27
            },
            lupulo:[
                {min60:"northern", cantidad: 0.45}, 
                {min30:"Crystal",  cantidad: 0.55}
            ],
            levadura:{
                marca: "Whitelabs WLP940", 
                cant: 0.025
            },
            agua: 38.5,
            fermantables:{
                maiz: 0.45
            },
        },
        fabricada: true,
        fecha: new Date("2020/05/20"),
        envase: [0.25,0.5,5,20],
    },
    {_id: 2,  nombre: "European Lager",         tipo: "Lager palida",       origen: "Aleman",           caracteristicas: {ibus: 25.7,   graduacion: 4.6,  ebc: 5.6},  ingredientes: {malta: {base:"pilsner",        cant: 3.95,   especial:"carapils",  cant: 0.13},                                                                                 lupulo: [                                         {min30:"northern",    cantidad: 0.45},    {min15:"hallentauer", cantidad: 0.55}], levadura: {marca: "whitelabs WLP830",   cant: 0.025}, agua: 41,   fermentables: {copos_de_cebada: 0.4}},            fabricada: true, fecha: new Date("2020/08/22"), envase: [0.5,1,5]},
    {_id: 3,  nombre: "Japonese Rice Lager",    tipo: "Lager palida",       origen: "Japónes",          caracteristicas: {ibus: 25,     graduacion: 5.1,  ebc: 7.3},  ingredientes: {malta: {base:"pilsner",        cant: 4.7},                                                                                                                      lupulo: [{min60:"sorachi",      cantidad: 0.35},  {min30:"saaz",        cantidad: 0.65}                                          ], levadura: {marca: "wyeast 2278",        cant: 0.020}, agua: 40,   fermentables: {arroz: 0.5}},                      fabricada: false},
    {_id: 4,  nombre: "Czech Pilsner",          tipo: "Pilsner lager",      origen: "Checo",            caracteristicas: {ibus: 25,     graduacion: 4.4,  ebc: 5},    ingredientes: {malta: {base:"pilsner",        cant: 4.66},                                                                                                                     lupulo: [{min60:"czech_Saaz",   cantidad: 0.15},                                            {min15:"Crystal",     cantidad: 0.85}], levadura: {marca: "wyeast 2001",        cant: 0.020}, agua: 38},                                                    fabricada: true, fecha: new Date("2019/03/22"), envase: [5,20]}, 
    {_id: 5,  nombre: "German Pilsner",         tipo: "Pilsner lager",      origen: "Aleman",           caracteristicas: {ibus: 30.2,   graduacion: 4.5,  ebc: 5},    ingredientes: {malta: {base:"pils",           cant: 4.55,   especial:"carapils",  cant: 0.13},                                                                                 lupulo: [{min60:"spalt",        cantidad: 1}                                                                                     ], levadura: {marca: "wyeast 2007",        cant: 0.025}, agua: 38},                                                    fabricada: true, fecha: new Date("2019/03/22"), envase: [1,5]},
    {_id: 6,  nombre: "bohemian Pilsner",       tipo: "Pilsner lager",      origen: "Aleman",           caracteristicas: {ibus: 35.4,   graduacion: 4.9,  ebc: 6.9},  ingredientes: {malta: {base:"bohem_Pilsner",  cant: 5,      especial:"carapils",  cant: 0.25},                                                                                 lupulo: [{min60:"saaz",         cantidad: 0.45},  {min30:"crystal",     cantidad: 0.55}                                          ], levadura: {marca: "wyeast 2124",        cant: 0.020}, agua: 42,   fermentables:{maiz: 0.45}},                       fabricada: false},
    {_id: 7,  nombre: "Vienna Lager",           tipo: "Lager",              origen: "Austriaco",        caracteristicas: {ibus: 26.5,   graduacion: 5.1,  ebc: 19.7}, ingredientes: {malta: {base:"viena",          cant: 4.16,   especial:"munich",    cant: 0.67,  especial:"melanoidina",  cant: 0.12,   especial:"chocolate",      cant: 0.5},   lupulo: [{min60:"northern",     cantidad: 0.35},  {min30:"hallentauer", cantidad: 0.45},    {min15:"tettnang",    cantidad: 0.20}], levadura: {marca: "whitelabs WLP830",   cant: 0.03},  agua: 39},                                                    fabricada: true, fecha: new Date("2021/04/12"), envase: [5,20]},
    {_id: 8,  nombre: "Oktoberfest",            tipo: "Lager",              origen: "Aleman",           caracteristicas: {ibus: 25.2,   graduacion: 5.3,  ebc: 13.6}, ingredientes: {malta: {base:"viena",          cant: 4,      especial:"munich",    cant: 0.27,  especial:"carapils",     cant: 0.75,   especial:"cristal",        cant:0.1},    lupulo: [{min60:"perle",        cantidad: 0.45},  {min30:"hallentauer", cantidad: 0.55}                                          ], levadura: {marca: "whitelabs WLP820",   cant: 0.025}, agua: 39},                                                    fabricada: false},
    {_id: 9,  nombre: "Traditional Bock",       tipo: "Lager",              origen: "Aleman",           caracteristicas: {ibus: 22,     graduacion: 6.5,  ebc: 29.1}, ingredientes: {malta: {base:"pale",           cant: 2.75,   especial:"munich",    cant: 2.75,  especial:"carapils",     cant: 0.55,   especial:"special_B",      cant:0.35},   lupulo: [{min60:"northern",     cantidad: 0.55},                                            {min15:"tettnang",    cantidad: 0.45}], levadura: {marca: "wyeast 2206",        cant: 0.5},   agua: 45},                                                    fabricada: true, fecha: new Date("2019/03/22"), envase: [5,20]}, 
    {_id: 10, nombre: "Munich Dunkel",          tipo: "Lager oscura",       origen: "Aleman",           caracteristicas: {ibus: 27.4,   graduacion: 5.5,  ebc: 34.4}, ingredientes: {malta: {base:"lager",          cant: 2,      especial:"munich",    cant: 3,     especial:"biscuit",      cant: 0.2,    especial:"chocolate",      cant:0.1},    lupulo: [{min60:"magnum",       cantidad: 0.25},  {min30:"hallentauer", cantidad: 0.75}                                          ], levadura: {marca: "fermentis W34/70",   cant: 0.5},   agua: 41},                                                    fabricada: false},
    {_id: 11, nombre: "Dark American Lager",    tipo: "Lager oscura",       origen: "Estadounidense",   caracteristicas: {ibus: 19,     graduacion: 5.6,  ebc: 31.9}, ingredientes: {malta: {base:"pils_Extra",     cant: 3.54,   especial:"munich",    cant: 0.76,  especial:"cristal",      cant: 0.15,   especial:"special_B",      cant: 0.3},   lupulo: [{min60:"northern",     cantidad: 0.65},  {min30:"perle",       cantidad: 0.25},    {min15:"hallertauer", cantidad: 0.10}], levadura: {marca: "Wyeast 2035",        cant: 0.25},  agua: 41,   fermentables:{maiz: 0.70}},                       fabricada: true, fecha: new Date("2021/08/22"), envase: [0.25]},
    {_id: 12, nombre: "Pale Ale",               tipo: "Ale palida",         origen: "Ingles",           caracteristicas: {ibus: 26,     graduacion: 3.8,  ebc: 5.1},  ingredientes: {malta: {base:"pale_Extra",     cant: 4.3,    especial:"cristal",   cant: 0.95},                                                                                 lupulo: [{min60:"challenger",   cantidad: 0.45},  {min30:"golding",     cantidad: 0.55}                                          ], levadura: {marca: "whitelabs WLP005",   cant: 0.25},  agua: 38},                                                    fabricada: false},
    {_id: 13, nombre: "Spring Beer",            tipo: "Ale palida",         origen: "Estadounidense",   caracteristicas: {ibus: 34.6,   graduacion: 4.5,  ebc: 9.3},  ingredientes: {malta: {base:"pale",           cant: 4,      especial:"munich",    cant: 0.5},                                                                                  lupulo: [{min60:"galaxy",       cantidad: 0.65},                                            {min15:"waiti",       cantidad: 0.35}], levadura: {marca: "wyeast 1275",        cant: 0.25},  agua: 38},                                                    fabricada: true, fecha: new Date("2021/05/21"), envase: [0.25]},
    {_id: 14, nombre: "Saison",                 tipo: "Ale palida",         origen: "Belga",            caracteristicas: {ibus: 16,     graduacion: 5.6,  ebc: 17.1}, ingredientes: {malta: {base:"pilsner",        cant: 3.57,   especial:"munich",    cant: 0.89,  especial:"trigo",        cant: 0.18,   especial:"special_B",      cant: 0.135}, lupulo: [{min60:"magnum",       cantidad: 0.40},  {min30:"golding",     cantidad: 0.60}                                          ], levadura: {marca: "wyeast 3724",        cant: 0.5},   agua: 39},                                                    fabricada: true, fecha: new Date("2018/03/06"), envase: [1,5]},
    {_id: 15, nombre: "English IPA",            tipo: "Indian pale Ale",    origen: "Ingles",           caracteristicas: {ibus: 60.1,   graduacion: 5.7,  ebc: 13},   ingredientes: {malta: {base:"pale",           cant: 5.8,    especial:"cristal",   cant: 0.14},                                                                                 lupulo: [                                         {min30:"challenger",  cantidad: 0.30},    {min15:"golding",     cantidad: 0.70}], levadura: {marca: "wyeast 1187",        cant: 0.25},  agua: 30},                                                    fabricada: true, fecha: new Date("2019/01/13"), envase: [5,20]},
    {_id: 16, nombre: "American IPA",           tipo: "Indian pale Ale",    origen: "Estadounidense",   caracteristicas: {ibus: 55,     graduacion: 6.2,  ebc: 10.6}, ingredientes: {malta: {base:"pale",           cant: 6},                                                                                                                        lupulo: [{min60:"citra",        cantidad: 0.45},  {min30:"simcoe",      cantidad: 0.55}                                          ], levadura: {marca: "whitelabs WLP060",   cant: 0.25},  agua: 42},                                                    fabricada: false},
    {_id: 17, nombre: "Imperial IPA",           tipo: "Indian pale Ale",    origen: "Ruso",             caracteristicas: {ibus: 75,     graduacion: 8.6,  ebc: 24},   ingredientes: {malta: {base:"pale",           cant: 8.1,    especial:"cristal",   cant: 0.1,   especial:"chocolate",    cant: 0.08},                                           lupulo: [{min60:"chinook",      cantidad: 0.55},  {min30:"simcoe",      cantidad: 0.15},    {min15:"willamette",  cantidad: 0.30}], levadura: {marca: "whitelabs WLP001",   cant: 0.4},   agua: 48},                                                    fabricada: false},
    {_id: 18, nombre: "Flanders Red Ale",       tipo: "Ale agrias",         origen: "Holandes",         caracteristicas: {ibus: 20.7,   graduacion: 6.2,  ebc: 29},   ingredientes: {malta: {base:"viena_deluxe",   cant: 3.2,    especial:"pale",      cant: 1.6,   especial:"trigo",        cant: 0.25,    especial:"caramunich",    cant: 0.3},   lupulo: [                                         {min30:"golding",     cantidad: 1}                                             ], levadura: {marca: "wyeast 3763",        cant: 0.25},  agua: 41},                                                    fabricada: true, fecha: new Date("2020/02/22"), envase: [0.5,1,5]},
    {_id: 19, nombre: "Cherry Lambic",          tipo: "Ale agrias",         origen: "Belga",            caracteristicas: {ibus: 15,     graduacion: 7.3,  ebc: 10},   ingredientes: {malta: {base:"pale",           cant: 4.5,    especial:"trigo",     cant: 1.5},                                                                                  lupulo: [{min60:"challenger",   cantidad: 1}                                                                                     ], levadura: {marca: "DCL WB-06",          cant: 0.125}, agua: 44,   fermentables:{cerezas: 6}},                       fabricada: true, fecha: new Date("2021/06/09"), envase: [5,20]},
    {_id: 20, nombre: "London Bitter",          tipo: "Ale amarga",         origen: "Ingles",           caracteristicas: {ibus: 22,     graduacion: 4.3,  ebc: 17},   ingredientes: {malta: {base:"pale",           cant: 4,      especial:"cristal",   cant: 0.4},                                                                                  lupulo: [{min60:"challenger",   cantidad: 0.15},  {min30:"fuggle",      cantidad: 0.35},    {min15:"golding",     cantidad: 0.50}], levadura: {marca: "Wyeast 1318",        cant: 0.5},   agua: 38},                                                    fabricada: false},
    {_id: 21, nombre: "Irish Red Ale",          tipo: "Ale amarga",         origen: "Ingles",           caracteristicas: {ibus: 24.5,   graduacion: 5.0,  ebc: 23},   ingredientes: {malta: {base:"pale",           cant: 4.5,    especial:"cristal",   cant: 0.2,   especial:"cebada_clara", cant: 0.3,     especial:"cebada_oscura", cant: 0.05},  lupulo: [{min60:"fuggle",       cantidad: 0.25},  {min30:"challenger",  cantidad: 0.75}                                          ], levadura: {marca: "wyeast 1084",        cant: 0.5},   agua: 39},                                                    fabricada: true, fecha: new Date("2020/01/16"), envase: [5,20]},
    {_id: 22, nombre: "Belgian Blonde Ale",     tipo: "Ale fuerte",         origen: "Belga",            caracteristicas: {ibus: 18,     graduacion: 7.4,  ebc: 12.9}, ingredientes: {malta: {base:"pilsner",        cant: 6,      especial:"caraviena", cant: 0.25,  especial:"caramunich",   cant: 0.25},                                           lupulo: [{min60:"golding",      cantidad: 1}                                                                                     ], levadura: {marca: "wyeast 1388",        cant: 0.25},  agua: 43,   fermentables:{azucar: 0.3}},                      fabricada: false},
    {_id: 23, nombre: "Belgian Dubbel",         tipo: "Ale fuerte",         origen: "Belga",            caracteristicas: {ibus: 25,     graduacion: 6.9,  ebc: 29.2}, ingredientes: {malta: {base:"viena",          cant: 5.3,                                                                                                                       lupulo: [{min60:"hallentauer",  cantidad: 0.40},                                            {min15:"tettnang",    cantidad: 0.60}], levadura: {marca: "wyeast 3944",        cant: 0.25},  agua: 43},                                                    fabricada: true, fecha: new Date("2017/08/09"), envase: [20]},
    {_id: 24, nombre: "Old Ale",                tipo: "Brown ale",          origen: "Ingles",           caracteristicas: {ibus: 55,     graduacion: 8.7,  ebc: 32.6}, ingredientes: {malta: {base:"pale",           cant: 4.5,    especial:"munich",    cant: 1.8,   especial:"cristal",      cant: 0.3,     especial:"chocolate",     cant:0.1},    lupulo: [{min60:"golding",      cantidad: 0.60},  {min30:"crystal",     cantidad: 0.40}                                          ], levadura: {marca: "wyeast 1028",        cant: 0.25},  agua: 43,   fermentables: {azucar_maiz: 0.650}},              fabricada: false},
    {_id: 25, nombre: "English Barley Wine",    tipo: "Vino de cebada",     origen: "Ingles",           caracteristicas: {ibus: 50,     graduacion: 9.6,  ebc: 27.3}, ingredientes: {malta: {base:"pale",           cant: 7.2,    especial:"cristal",   cant: 0.3,   especial:"carapils",     cant: 0.8},                                            lupulo: [{min60:"hallentauer",  cantidad: 0.45},  {min30:"crystal",     cantidad: 0.25},    {min15:"saaz",        cantidad: 0.30}], levadura: {marca: "wyeast 1028",        cant: 0.50},  agua: 45,   fermentables:{miel: 0.5}},                        fabricada: true, fecha: new Date("2018/09/18"), envase: [0.25,1]},
    {_id: 26, nombre: "American Barley Wine",   tipo: "Vino de cebada",     origen: "Estadounidense",   caracteristicas: {ibus: 66,     graduacion: 10.9, ebc: 25.4}, ingredientes: {malta: {base:"pale",           cant: 10,     especial:"cristal",   cant: 0.4,   especial:"carafa",       cant: 0.3},                                            lupulo: [{min60:"chinook",      cantidad: 0.40},  {min30:"cascade",     cantidad: 0.60}                                          ], levadura: {marca: "wyeast 1056",        cant: 0.25},  agua: 53},                                                    fabricada: false},
    {_id: 27, nombre: "Brown Porter",           tipo: "Porter",             origen: "Ingles",           caracteristicas: {ibus: 30.2,   graduacion: 4.9,  ebc: 45},   ingredientes: {malta: {base:"pale",           cant: 4,      especial:"cristal",   cant: 0.35,  especial:"chocolate",    cant: 0.2,     especial:"caramel",       cant: 0.3},   lupulo: [{min60:"golding",      cantidad: 0.15},  {min30:"perle",       cantidad: 0.85}                                          ], levadura: {marca: "wyaest 1028",        cant: 0.25},  agua: 39},                                                    fabricada: false},
    {_id: 28, nombre: "Vanilla Bourbon Stout",  tipo: "Stout",              origen: "Ingles",           caracteristicas: {ibus: 30.2,   graduacion: 7.8,  ebc: 58.6}, ingredientes: {malta: {base:"pale",           cant: 4.9,    especial:"viena",     cant: 1.1,   especial:"caramel",      cant: 0.5,     especial:"chocolate",     cant: 0.35},  lupulo: [                                         {min30:"northern",    cantidad: 0.10},    {min15:"challenger",  cantidad: 0.90}], levadura: {marca: "wyeast 1028",        cant: 0.5},   agua: 43,   fermentables: {vainilla: 0.05, bourbon: 0.4}},    fabricada: true, fecha: new Date("2015/05/17"), envase: [1,5]},
    {_id: 29, nombre: "Russian Imperial Stout", tipo: "Stout",              origen: "Ruso",             caracteristicas: {ibus: 60,     graduacion: 8.2,  ebc: 76.3}, ingredientes: {malta: {base:"pale",           cant: 7,      especial:"cristal",   cant: 0.5,   especial:"cebada_oscura",cant: 0.2,     especial:"chocolate",     cant: 0.15},  lupulo: [{min60:"challenger",   cantidad: 0.45},  {min30:"golding",     cantidad: 0.55}                                          ], levadura: {marca: "wyeast 1028",        cant: 0.25},  agua: 45},                                                    fabricada: true, fecha: new Date("2019/01/12"), envase: [1,5,20]},
    {_id: 30, nombre: "Weissbier",              tipo: "Weissbier",          origen: "Aleman",           caracteristicas: {ibus: 15.3,   graduacion: 5,    ebc: 6.3},  ingredientes: {malta: {base:"pils_urquell",   cant: 2.3,    especial:"trigo",     cant: 2.7},                                                                                  lupulo: [{min60:"hallentauer",  cantidad: 0.65},                                            {min15:"saaz",        cantidad: 0.35}], levadura: {marca: "wyaest 3068",        cant: 0.25},  agua: 39},                                                    fabricada: false},
    {_id: 31, nombre: "American Wheat Beer",    tipo: "Weissbier",          origen: "Estadounidense",   caracteristicas: {ibus: 25.7,   graduacion: 5.9,  ebc: 9.1},  ingredientes: {malta: {base:"lager",          cant: 2.5,    especial:"trigo",     cant: 3,     especial:"carapils",     cant: 0.3},                                            lupulo: [{min60:"citra",        cantidad: 1}                                                                                     ], levadura: {marca: "wyaest 1010",        cant: 0.25},  agua: 41},                                                    fabricada: false},
    {_id: 32, nombre: "Cerveza de centeno",     tipo: "Cerveza centeno",    origen: "Aleman",           caracteristicas: {ibus: 25,     graduacion: 5.6,  ebc: 9.8},  ingredientes: {malta: {base:"pale",           cant: 2.5,    especial:"centeno",   cant: 0.27},                                                                                 lupulo: [{min60:"northern",     cantidad: 0.45},  {min30:"crystal",     cantidad: 0.55}                                          ], levadura: {marca: "Whitelabs WLP940",   cant: 25},    agua: 27,   fermentables:{maiz: 0.45}},                       fabricada: true, fecha: new Date("2021/04/22"), envase: [0.25,5,20]},
    {_id: 33, nombre: "Witbier",                tipo: "Witbier",            origen: "Austriaco",        caracteristicas: {ibus: 15.3,   graduacion: 4.5,  ebc: 7.8},  ingredientes: {malta: {base:"pale",           cant: 2.3,    especial:"trigo",     cant: 2.3},                                                                                  lupulo: [{min60:"saaz",         cantidad: 1}                                                                                     ], levadura: {marca: "wyeast 3944",        cant: 0.25},  agua: 38,   fermentables:{naranja: 0.025, cilantro:0.025}},   fabricada: false},
    {_id: 34, nombre: "Ginger Beer",            tipo: "Indefinida",         origen: "Ingles",           caracteristicas: {ibus: 25.1,   graduacion: 4.5,  ebc: 6.3},  ingredientes: {malta: {base:"lager",          cant: 3.5},                                                                                                                      lupulo: [{min60:"galaxy",       cantidad: 1}                                                                                     ], levadura: {marca: "Wyeast 1028",        cant: 0.5},   agua: 40,   fermentables:{maiz: 1, jengibre: 0.15}},          fabricada: true, fecha: new Date("2018/05/22"), envase: [0.25,1,5]},
    {_id: 35, nombre: "Strawberry Beer",        tipo: "Indefinida",         origen: "Ingles",           caracteristicas: {ibus: 18.4,   graduacion: 4.4,  ebc: 8},    ingredientes: {malta: {base:"lager",          cant: 3.4,    especial:"munich",    cant: 0.75,  especial:"trigo",        cant: 0.25},                                           lupulo: [{min60:"challenger",   cantidad: 0.70},                                            {min15:"golding",     cantidad: 0.30}], levadura: {marca: "wWhitelabs WLP001",  cant: 0.25},  agua: 41},                                                    fabricada: false},
])