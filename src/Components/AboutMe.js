import Images from "../Images"

const AboutMe = ({mode}) => {

    const listInfoAboutMe = [
      {
         image : Images.apprentissage,
         title : "Learning Progress",
         description : "I am passionate about continuous learning and personal growth. I am constantly seeking out new skills and knowledge that I can acquire to improve my abilities. I enjoy finding new challenges for myself and working hard to overcome them. I believe that the key to success is perseverance and determination. That's why I try to maximize every moment of my time by staying productive and learning something new every day. For me, it's important to stay engaged in continuous learning and to stay up-to-date with the latest trends and technologies to improve my skills and deliver the best possible quality to my projects."
      },
      {
         image : Images.design,
         title : "Mobile and Web Design Enthuisiast",
         description :"I am passionate about creating user interfaces that are not only aesthetically pleasing but also enhance the user experience. My design approach is to create interfaces from scratch for each project. I believe that every project is unique and deserves special attention in its design. Rather than using pre-made templates, I enjoy taking the time to understand users' needs and preferences to create a unique, customized user interface that meets their specific requirements. By working in this way, I am confident that I can create user interfaces that are innovative, elegant, and functional."
      },
      {
         image : Images.reseaux_sociaux,
         title : "Social Networks",
         description :"IN ADDITION TO MY SKILLS IN WEB DESIGN AND DEVELOPMENT, I AM ALSO PASSIONATE ABOUT DIGITAL MARKETING AND SOCIAL MEDIA MANAGEMENT. I HAVE AN INSTAGRAM PAGE WITH OVER 60K FOLLOWERS THAT I BUILT FROM SCRATCH. THROUGH THIS EXPERIENCE, I HAVE GAINED A STRONG UNDERSTANDING OF SOCIAL MEDIA MARKETING STRATEGIES AND HOW TO CREATE AND PROMOTE ENGAGING CONTENT. I AM PROUD OF MY ABILITY TO CREATE SUCCESSFUL AD CAMPAIGNS AND USE ANALYTICS DATA TO IMPROVE THE PERFORMANCE OF MY SOCIAL MEDIA ACCOUNTS."
      },
     
    ]
    
    
    const RenderInformations = () => {
      
      const RenderInfoItem = ({item}) => {
        return (
            <div className={`${mode==1 ? 'item-info-light' : ''} item-info`}>
              <span className={`${mode==1 ? 'text-light' : ''} `}>
                {item}
              </span>
            </div>
        )
      }

    const RenderInformationItem = ({item}) => {
      return (
        <div className={`${mode==1 ? 'project-item-light' : ''} project-item`}>
            <div className="image-container">
              <img src={item.image} />
            </div> 
            <div className="project-information">
                <div className={`${mode==1 ? 'text-light' : ''} project-name `}><img src={Images.title_icon} /><span>{item.title}</span></div> 
                <div className="project-description">
                  <img src={Images.more_icon} />
                  <span className={`${mode==1 ? 'text-light' : ''} `}>
                     {item.description}
                  </span>
                  <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
                </div>   
            </div> 
        </div>
      )
    }

      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.project_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> More About me    </span>
                </div>
                <div className="list-projects"> 
                  {
                    listInfoAboutMe.map(item=>(
                      <RenderInformationItem item={item} />
                    ))
                  }
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
        {/*  */}
        <RenderInformations />
      </div>
    )
  }

export default AboutMe;