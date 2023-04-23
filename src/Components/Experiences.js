import Images from "../Images";

const Experiences = ({mode}) => {
    
    const listExepriences = [
        {
          image : Images.elr12_logo,
          name  : "UXCENTERS",
          title : "Full Stack Enginner",
          mission : " E-commerce Website with Stripe Payment Integration",
          description : "As part of my summer internship, I developed an e-commerce website using the Symfony PHP framework. The website allows users to browse products, add items to their cart, and complete purchases securely using the Stripe payment gateway. I integrated a variety of features, including user authentication, cart management, and product search functionality. This project allowed me to apply my knowledge of web development and payment gateway integration to create a functional and user-friendly e-commerce website.",
          period : "Jul. 2022 - août 2022 · 2 month",
          technologies : ["PHP","sql","Mysql","symfony","stripe","git","github","merise"]
        },
      ];

    const RenderExperience = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title ">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.image}  className=""/>
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.name} | {item.title}
                    </span>
                    <span>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
             
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.mission}
                  </span>
                  <div className="experience-description ">
                     {item.description}
                  </div>
                  <div className="list-specialities">
                      {
                        item?.technologies?.map((technoogy,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{technoogy}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderExperiences = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title item-title">
                    <img src={Images.experience_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Experiences  </span>
                </div>
                <div className="list-formations">
                  {
                    listExepriences.map((item,index)=>(
                      <RenderExperience item={item} key={index}/>
                    ))
                  }
                </div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderExperiences />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    )
  }

  export default Experiences ; 