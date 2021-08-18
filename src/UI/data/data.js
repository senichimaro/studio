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
    preloader:{
      visibility:true,
    },
    header:{
      visibility:true,
      h4:"Your trusted",
      h1:"<span>Interior</span> Design Partner for Home or Office",
      link:{
        hash:'#contact',
        text:'Get a Free Quote'
      }
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'About Us',
      h3:'Reasons to choose',
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages <br /> <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link:{
        hash:'#',
        text:'learn more'
      }
    },
    services:{
      visibility:false,
      h5:'Our Services',
      h2:'What We Do?',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Interior Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-blackboard",
          title:'Design Consultancy',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-home",
          title:'Residential Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        },
        {
          icon:"lni-briefcase",
          title:'Commercial Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-handshake",
          title:'Hospitality Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-grow",
          title:'Co-working Space Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        }
      ]
    },
    projects:{
      visibility:true,
      h5:'Featured Works',
      h2:'Projects You May Love',
      cards:[
        {
          image:'image1',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image3',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image5',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        }
      ]
    },
    team:{
      visibility: false,
      h5:'Meet The Team',
      h2:'Our Expert Designers',
      cards:[
        {
          delay:'0.4s',
          image:'image1',
          link:'Rob Hope',
          subtitle:'CEO & Founder',
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
          image:'image2',
          link:'Patric Green',
          subtitle:'Chief Designer',
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
          image:'image3',
          link:'Daryl Dixon',
          subtitle:'Consultant',
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
          image:'image4',
          link:'Mark Parker',
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
    testimonial:{
      visibility:true,
      cards:[
        {
          image:'t1',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Fajar',
          subtitle:'Random Customer'
        },
        {
          image:'t2',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Alina',
          subtitle:'Tesla Motors'
        },
        {
          image:'t3',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Celina',
          subtitle:'CEO, Alo'
        }
      ]
    },
    contact:{
      visibility:true
    },
    map:{
      visibility:false
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
    preloader:{
      visibility:true,
    },
    header:{
      visibility:true,
      h4:"Your trusted",
      h1:"<span>Interior</span> Design Partner for Home or Office",
      link:{
        hash:'#contact',
        text:'Get a Free Quote'
      }
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'About Us',
      h3:'Reasons to choose',
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages <br /> <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link:{
        hash:'#',
        text:'learn more'
      }
    },
    services:{
      visibility:false,
      h5:'Our Services',
      h2:'What We Do?',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Interior Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-blackboard",
          title:'Design Consultancy',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-home",
          title:'Residential Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        },
        {
          icon:"lni-briefcase",
          title:'Commercial Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-handshake",
          title:'Hospitality Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-grow",
          title:'Co-working Space Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        }
      ]
    },
    projects:{
      visibility:true,
      h5:'Featured Works',
      h2:'Projects You May Love',
      cards:[
        {
          image:'image1',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image3',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image5',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        }
      ]
    },
    team:{
      visibility: false,
      h5:'Meet The Team',
      h2:'Our Expert Designers',
      cards:[
        {
          delay:'0.4s',
          image:'image1',
          link:'Rob Hope',
          subtitle:'CEO & Founder',
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
          image:'image2',
          link:'Patric Green',
          subtitle:'Chief Designer',
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
          image:'image3',
          link:'Daryl Dixon',
          subtitle:'Consultant',
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
          image:'image4',
          link:'Mark Parker',
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
    testimonial:{
      visibility:true,
      cards:[
        {
          image:'t1',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Fajar',
          subtitle:'Random Customer'
        },
        {
          image:'t2',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Alina',
          subtitle:'Tesla Motors'
        },
        {
          image:'t3',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Celina',
          subtitle:'CEO, Alo'
        }
      ]
    },
    contact:{
      visibility:true
    },
    map:{
      visibility:false
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
    preloader:{
      visibility:true,
    },
    header:{
      visibility:true,
      h4:"Your trusted",
      h1:"<span>Interior</span> Design Partner for Home or Office",
      link:{
        hash:'#contact',
        text:'Get a Free Quote'
      }
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'About Us',
      h3:'Reasons to choose',
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages <br /> <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link:{
        hash:'#',
        text:'learn more'
      }
    },
    services:{
      visibility:false,
      h5:'Our Services',
      h2:'What We Do?',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Interior Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-blackboard",
          title:'Design Consultancy',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-home",
          title:'Residential Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        },
        {
          icon:"lni-briefcase",
          title:'Commercial Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-handshake",
          title:'Hospitality Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-grow",
          title:'Co-working Space Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        }
      ]
    },
    projects:{
      visibility:true,
      h5:'Featured Works',
      h2:'Projects You May Love',
      cards:[
        {
          image:'image1',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image3',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image5',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        }
      ]
    },
    team:{
      visibility: false,
      h5:'Meet The Team',
      h2:'Our Expert Designers',
      cards:[
        {
          delay:'0.4s',
          image:'image1',
          link:'Rob Hope',
          subtitle:'CEO & Founder',
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
          image:'image2',
          link:'Patric Green',
          subtitle:'Chief Designer',
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
          image:'image3',
          link:'Daryl Dixon',
          subtitle:'Consultant',
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
          image:'image4',
          link:'Mark Parker',
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
    testimonial:{
      visibility:true,
      cards:[
        {
          image:'t1',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Fajar',
          subtitle:'Random Customer'
        },
        {
          image:'t2',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Alina',
          subtitle:'Tesla Motors'
        },
        {
          image:'t3',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Celina',
          subtitle:'CEO, Alo'
        }
      ]
    },
    contact:{
      visibility:true
    },
    map:{
      visibility:false
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
    preloader:{
      visibility:true,
    },
    header:{
      visibility:true,
      h4:"Your trusted",
      h1:"<span>Interior</span> Design Partner for Home or Office",
      link:{
        hash:'#contact',
        text:'Get a Free Quote'
      }
    },
    about:{
      visibility:false,
      cta:'<span>27</span> Years Experience',
      h4:'About Us',
      h3:'Reasons to choose',
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages <br /> <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      link:{
        hash:'#',
        text:'learn more'
      }
    },
    services:{
      visibility:false,
      h5:'Our Services',
      h2:'What We Do?',
      cards:[
        {
          icon:"lni-paint-roller",
          title:'Interior Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-blackboard",
          title:'Design Consultancy',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-home",
          title:'Residential Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        },
        {
          icon:"lni-briefcase",
          title:'Commercial Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.4s'
        },
        {
          icon:"lni-handshake",
          title:'Hospitality Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'0.8s'
        },
        {
          icon:"lni-grow",
          title:'Co-working Space Design',
          para:'Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.',
          delay:'1.2s'
        }
      ]
    },
    projects:{
      visibility:true,
      h5:'Featured Works',
      h2:'Projects You May Love',
      cards:[
        {
          image:'image1',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image3',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image5',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image4',
          hash:'#',
          link:'Home Interior Design'
        },
        {
          image:'image2',
          hash:'#',
          link:'Home Interior Design'
        }
      ]
    },
    team:{
      visibility: false,
      h5:'Meet The Team',
      h2:'Our Expert Designers',
      cards:[
        {
          delay:'0.4s',
          image:'image1',
          link:'Rob Hope',
          subtitle:'CEO & Founder',
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
          image:'image2',
          link:'Patric Green',
          subtitle:'Chief Designer',
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
          image:'image3',
          link:'Daryl Dixon',
          subtitle:'Consultant',
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
          image:'image4',
          link:'Mark Parker',
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
    testimonial:{
      visibility:true,
      cards:[
        {
          image:'t1',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Fajar',
          subtitle:'Random Customer'
        },
        {
          image:'t2',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Alina',
          subtitle:'Tesla Motors'
        },
        {
          image:'t3',
          icon:'lni-quotation',
          para:'Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.',
          h5:'Celina',
          subtitle:'CEO, Alo'
        }
      ]
    },
    contact:{
      visibility:true
    },
    map:{
      visibility:false
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
