module.exports = {
  nav:{
    visibility:true,
    phone:"+98 222 4444",
    routes:[
      /** Set where links should be present
       * into location string of locations
      */

      {
        location:[
          // Home
          {
            isPage:'/about',
            route:'/',
            name:'Home'
          },
          {
            isPage:'/portfolio',
            route:'/',
            name:'Home'
          },
          {
            isPage:'/contact',
            route:'/',
            name:'Home'
          }
        ]
      },
      {
        location:[
          // About
          {
            isPage:'/',
            route:'/about',
            name:'About'
          },
          {
            isPage:'/portfolio',
            route:'/about',
            name:'About'
          },
          {
            isPage:'/contact',
            route:'/about',
            name:'About'
          }
        ]
      },
      {
        location:[
          // {
          //   isPage:'/',
          //   route:'#service',
          //   name:'Services'
          // }
        ]
      },
      {
        location:[
          // {
          //   isPage:'/',
          //   route:'#project',
          //   name:'Projects'
          // }
        ]
      },
      {
        location:[
          // Portfolio
          {
            isPage:'/',
            route:'/portfolio',
            name:'Portfolio'
          },
          {
            isPage:'/about',
            route:'/portfolio',
            name:'Portfolio'
          },
          {
            isPage:'/contact',
            route:'/portfolio',
            name:'Portfolio'
          }
        ]
      },
      {
        location:[
          // Contact
          {
            isPage:'/',
            route:'/contact',
            name:'Contact'
          },
          {
            isPage:'/about',
            route:'/contact',
            name:'Contact'
          },
          {
            isPage:'/portfolio',
            route:'/contact',
            name:'Contact'
          }
        ]
      }
    ]
  },
  home:{
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'Nuestra Empresa',
      h3:'Quienes Somos',
      para:"Bienvenidos a la web corporativa de la empresa, somos un Estudio de Ingenieria Civil dedicado desde 1992 al desarrollo de proyectos  tecnicos y supervisi??n de obras de ingenier??a civil, industrial, arquitectura y medioambiente. Nuestra meta es la satisfacci??n total de  nuestros clientes en cualquier fase del proceso de creaci??n de una infraestructua, bien obra p??blica como privada.",
      link:{
        hash:'#',
        text:'learn more'
      },
      image1:'empresa',
      image2:'bussines2'
    },
    services:{
      visibility:false,
      h5:'El proceso de Creaci??n',
      h2:'Servicios',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Planificaci??n',
          para:false,
          delay:'0.4s',
          item:[
            "Estudios de Demanda",
            "Geotecnia y Topograf??a",
            "Impacto Ambiental"
          ]
        },
        {
          icon:"lni-blackboard",
          title:'Proyecto',
          para:false,
          delay:'0.8s',
          item:[
            "Creaci??n de Anteproyecto",
            "Proyectos de Trazado",
            "Proyectos de Construcci??n"
          ]
        },
        {
          icon:"lni-home",
          title:'Obra',
          para:false,
          delay:'1.2s',
          item:[
            "Direcci??n de Obra",
            "Seguimiento Ambiental",
            "Control y Vigilancia de Obra"
          ]
        },
        {
          icon:"lni-briefcase",
          title:'Explotaci??n',
          para:false,
          delay:'0.4s',
          item:[
            "Inventario de Infraestructura",
            "Proyectos de Mantenimiento",
            "Contratos Postclasura"
          ]
        },
        {
          icon:"lni-handshake",
          title:'Asistencia',
          para:false,
          delay:'0.8s',
          item:[
            "Asistencia T??cnica en Licitaci??n",
            "Memorias Valoradas",
            "Coordinaci??n de Seguridad y Salud"
          ]
        },
        {
          icon:"lni-grow",
          title:'Estudios Afines',
          para:false,
          delay:'1.2s',
          item:[
            "Estudios de Viabilidad",
            "Estudios de Anteproyecto",
            "Estudios Informativos"
          ]
        }
      ]
    },
    team:{
      visibility: false,
      h5:'Centros de Trabajo',
      h2:'Nuestras Oficinas',
      cards:[
        {
          delay:'0.4s',
          image:'office1',
          link:'Burgos',
          subtitle:'Santo del Platano 22',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'0.8s',
          image:'office2',
          link:'Le??n',
          subtitle:'C/ Cinco Herman0s 7?? Q',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'1.2s',
          image:'office5',
          link:'Madrid',
          subtitle:'V??a del Padro Quinque 17',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'1.6s',
          image:'office4',
          link:'Barcelona',
          subtitle:'Rambla Mayor 11 2?? B',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        }
      ]
    },
    footer:{
      visibility:true,
      cardsLeft:{
        info:[
          {
            icon:'lni-phone-handset',
            content:'+1880 123 456 789'
          },
          {
            icon:'lni-envelope',
            content:'contact@yourmail.com'
          },
          {
            icon:'lni-map',
            content:'1234 Avenue New York, US'
          }
        ],
        social:[
          {
            hash:'#',
            icon:'lni-facebook-filled'
          },
          {
            hash:'#',
            icon:'lni-twitter-original'
          },
          {
            hash:'#',
            icon:'lni-google'
          },
          {
            hash:'#',
            icon:'lni-instagram'
          }
        ]
      },
      cardsCenterLeft:{
        title:'Essential Links',
        links:[
          {
            hash:'#',
            name:'About'
          },
          {
            hash:'#',
            name:'Projects'
          },
          {
            hash:'#',
            name:'Support'
          }
        ]
      },
      cardsCenterRight:{
        title:'Services',
        links:[
          {
            hash:'#',
            name:'Product Design'
          },
          {
            hash:'#',
            name:'Research'
          },
          {
            hash:'#',
            name:'Office Management'
          }
        ]
      },
      cardRight:{
        title:'Newsleter',
        para:'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        formIcon:'lni-angle-double-right'
      }
    }
  },
  about:{
    header:{
      visibility:true,
      h4:"Capital Humano",
      h1:"<span id='cborder2'>Trabajo en Equipo</span> <span id='cborder'>y satisfacci??n de clientes</span>",
      link:{
        hash:'#contact',
        text:'Las razones de nuestro crecimiento'
      },
      image:'building2'
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'La Mejora Continua como Identidad',
      h3:'Nuestra Organizaci??n',
      para:"Ponemos especial dedicaci??n en transmitir a nuestro equipo la pol??tica de la empresa, adquiriendo de todos ellos el compromiso por la calidad y la interrelaci??n del trabajo con el medio ambiente. Comprometidos con la sociedad y el medio ambiente entendemos la ingenier??a como un medio para perfeccionar el mundo que nos rodea con el que, a trav??s de la imaginaci??n y el trabajo, podremos  acercarnos a la vida con la que so??amos.<br /><br /> Nuestro equipo est?? representado por una treintena de personas repartidas en nuestras diversas oficinas, siendo el capital humano, la capacidad de trabajo en equipo y la satisfacci??n de nuestros clientes las principales razones de nuestro crecimiento. La pol??tica de recursos humanos en la prevenci??n, la seguridad laboral y la correcta gesti??n de las competencias, por ello inicidimos en la formci??n continua, tutorizamos la adquisici??n de las nuevas competencias y el mantenimiento de los mejores profesionales.",
      link:{
        hash:'#',
        text:'learn more'
      },
      image1:'meeting',
      image2:'woman'
    },
    services:{
      visibility:false,
      h5:'Our Services',
      h2:'What We Do?',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Caminos y Puertos',
          para:'Profesionales con una s??lida base t??cnica para incidir en la ordenaci??n del territorio.',
          delay:'0.4s'
        },
        {
          icon:"lni-briefcase",
          title:'Obras P??blicas',
          para:'Direcci??n y ejecuci??n de proyectos con especial ??nfasis en tecnolog??a de la construcci??n.',
          delay:'0.4s'
        },
        {
          icon:"lni-blackboard",
          title:'Ingenieros Industriales',
          para:'Profesionales en el desarrollo de la industria, de las administraciones y servicios.',
          delay:'0.8s'
        },
        {
          icon:"lni-home",
          title:'Ingenieros de Minas',
          para:'Investigaci??n, extracci??n, procesamiento y transformaci??n los recursos minerales y energ??ticos.',
          delay:'1.2s'
        },
        {
          icon:"lni-handshake",
          title:'Arquitectos',
          para:'Direcci??n y Redacci??n de proyectos bajo la coordinaci??n del proyectista redactor.',
          delay:'0.8s'
        },
        {
          icon:"lni-grow",
          title:'Arquitectos T??cnicos',
          para:'Control minucioso y preciso de la construcci??n del edificio conforme a las buenas pr??cticas.',
          delay:'1.2s'
        }
      ]
    },
    footer:{
      visibility:true,
      cardsLeft:{
        info:[
          {
            icon:'lni-phone-handset',
            content:'+1880 123 456 789'
          },
          {
            icon:'lni-envelope',
            content:'contact@yourmail.com'
          },
          {
            icon:'lni-map',
            content:'1234 Avenue New York, US'
          }
        ],
        social:[
          {
            hash:'#',
            icon:'lni-facebook-filled'
          },
          {
            hash:'#',
            icon:'lni-twitter-original'
          },
          {
            hash:'#',
            icon:'lni-google'
          },
          {
            hash:'#',
            icon:'lni-instagram'
          }
        ]
      },
      cardsCenterLeft:{
        title:'Essential Links',
        links:[
          {
            hash:'#',
            name:'About'
          },
          {
            hash:'#',
            name:'Projects'
          },
          {
            hash:'#',
            name:'Support'
          }
        ]
      },
      cardsCenterRight:{
        title:'Services',
        links:[
          {
            hash:'#',
            name:'Product Design'
          },
          {
            hash:'#',
            name:'Research'
          },
          {
            hash:'#',
            name:'Office Management'
          }
        ]
      },
      cardRight:{
        title:'Newsleter',
        para:'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        formIcon:'lni-angle-double-right'
      }
    }
  },
  portfolio:{
    header:{
      visibility:true,
      h4:"Puente de la Constituci??n",
      h1:"<span>La Cumbre</span> de la ingenier??a civil espa??ola",
      link:false,
      image:'bridge'
    },
    team:{
      visibility: false,
      h5:'Proyectos Galardonados',
      h2:'Infraestructuras',
      cards:[
        {
          delay:'0.4s',
          image:'buildingRed',
          link:'Torre Marichalar con mirador panor??mico 360??',
          subtitle:'Barcelona, Catalunya',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'0.8s',
          image:'corp',
          link:'Energ??a solar para autoconsumo industral ',
          subtitle:'Madrid, Madrid',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'1.2s',
          image:'wind',
          link:'Parque E??lico de 600 Megavatios',
          subtitle:'Cullera, Valencia.',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        },
        {
          delay:'1.6s',
          image:'solar',
          link:' Mayores instaladores en Espa??a, alcanzando 80 GW.',
          subtitle:'Intern',
          social:[
            {
              hash:'#',
              icon:'lni-facebook-filled'
            },
            {
              hash:'#',
              icon:'lni-twitter-original'
            },
            {
              hash:'#',
              icon:'lni-linkedin-original'
            }
          ]
        }
      ]
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'Especialistas con tecnolog??a avanzada',
      h3:'Ingenier??a Civil',
      para:"Somos especialistas en la ingenier??a de residuos y hemos desarrollado soluciones en este ??mbito en toda la geograf??a nacional e internacional. Con la gesti??n de los residuos conseguimos un menor impacto ambiental. Hemos realizado proyectos de edificaci??n para clientes p??blicos y privados con gran satisfacci??n para nuestros clientes. Desde viviendas, centros de exposici??n, hoteles y restaurantes, a edificios industriales, culturales y deportivos. Dentro del ??mbito de desarrollo urbano hemos llevado a cabo urbanizaciones singulares e hist??ricas en importantes ciudades. <br /> <br /> Destacan sobre todos los dem??s, los trabajos relacionados con carreteras llevando a cabo Estudios Informativos, Proyectos de Trazado y Construcci??n de autov??as, desdoblamientos, mejoras y ensanches de carreteras convencionales, mejora de accesos y variantes de poblaci??n, contando con los medios t??cnicos m??s avanzados y con un equipo multidisciplinar que abarca todos los campos relacionados con las Infraestructuras del Transporte.",
      link:{
        hash:'#',
        text:'learn more'
      },
      image1:'beach',
      image2:'center'
    },
    services:{
      visibility:false,
      h5:'Actividades en Cuatro ??reas',
      h2:'Clientes',
      cards:[
        {
          icon:false,
          image:'logo1',
          title:'Aadministrciones Nacionales',
          para:'',
          delay:'0.4s',
          item:[]
        },
        {
          icon:false,
          image:'logo2',
          title:'Aadministrciones Auton??micas',
          para:'',
          delay:'0.8s',
          item:[]
        },
        {
          icon:false,
          image:'logo3',
          title:'Aadministrciones Locales',
          para:'',
          delay:'1.2s',
          item:[]
        },
        {
          icon:false,
          image:'logo4',
          title:'Empresas Privadas',
          para:'',
          delay:'0.4s',
          item:[]
        }
      ]
    },
    footer:{
      visibility:true,
      cardsLeft:{
        info:[
          {
            icon:'lni-phone-handset',
            content:'+1880 123 456 789'
          },
          {
            icon:'lni-envelope',
            content:'contact@yourmail.com'
          },
          {
            icon:'lni-map',
            content:'1234 Avenue New York, US'
          }
        ],
        social:[
          {
            hash:'#',
            icon:'lni-facebook-filled'
          },
          {
            hash:'#',
            icon:'lni-twitter-original'
          },
          {
            hash:'#',
            icon:'lni-google'
          },
          {
            hash:'#',
            icon:'lni-instagram'
          }
        ]
      },
      cardsCenterLeft:{
        title:'Essential Links',
        links:[
          {
            hash:'#',
            name:'About'
          },
          {
            hash:'#',
            name:'Projects'
          },
          {
            hash:'#',
            name:'Support'
          }
        ]
      },
      cardsCenterRight:{
        title:'Services',
        links:[
          {
            hash:'#',
            name:'Product Design'
          },
          {
            hash:'#',
            name:'Research'
          },
          {
            hash:'#',
            name:'Office Management'
          }
        ]
      },
      cardRight:{
        title:'Newsleter',
        para:'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        formIcon:'lni-angle-double-right'
      }
    }
  },
  contact:{
    contact:{
      visibility:true,
      subtitle:'Consultanos sin Compromiso',
      title:'Cont??ctnos',
    },
    map:{
      visibility:false,
      source:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.503745914236!2d-4.775636719070887!3d37.883507487755296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf7dd9f51d2b%3A0x45e07c5e2661266c!2sPlaza%20de%20la%20Corredera%2C%208%2C%2014002%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1629373914957!5m2!1ses!2ses'
    },
    footer:{
      visibility:true,
      cardsLeft:{
        info:[
          {
            icon:'lni-phone-handset',
            content:'+1880 123 456 789'
          },
          {
            icon:'lni-envelope',
            content:'contact@yourmail.com'
          },
          {
            icon:'lni-map',
            content:'1234 Avenue New York, US'
          }
        ],
        social:[
          {
            hash:'#',
            icon:'lni-facebook-filled'
          },
          {
            hash:'#',
            icon:'lni-twitter-original'
          },
          {
            hash:'#',
            icon:'lni-google'
          },
          {
            hash:'#',
            icon:'lni-instagram'
          }
        ]
      },
      cardsCenterLeft:{
        title:'Essential Links',
        links:[
          {
            hash:'#',
            name:'About'
          },
          {
            hash:'#',
            name:'Projects'
          },
          {
            hash:'#',
            name:'Support'
          }
        ]
      },
      cardsCenterRight:{
        title:'Services',
        links:[
          {
            hash:'#',
            name:'Product Design'
          },
          {
            hash:'#',
            name:'Research'
          },
          {
            hash:'#',
            name:'Office Management'
          }
        ]
      },
      cardRight:{
        title:'Newsleter',
        para:'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        formIcon:'lni-angle-double-right'
      }
    }
  }
}
