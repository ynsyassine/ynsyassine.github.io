import Images from "../Images";

const Welcome = ({mode}) => {

    const BodyLeft = () => {
      return(
        <div className="body_left-container">
          <div className="left_content-first">
            <div>
              <span className={`${mode===1 ? "light-blue" : ""} function`}> /* Data Scientist */ </span>
            </div>
            <div>
              <span className={`${mode==1 ? 'text-light' : ''}`}> Talk is cheap .</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}>
                Show me the code &nbsp;
                <span className={`${mode==1 ? 'text-blue' : ''} operator`}>&lt; /&gt; .</span>
              </span>
              <span className={`${mode==1 ? 'light-bare' : ''} `}>
                As a data scientist, I am passionate about finding insights and making discoveries through data analysis. 
                I enjoy creating solutions that help businesses and organizations make data-driven decisions.
                 I am constantly striving to improve my skills and expertise in data science, machine learning, 
                 and statistics to deliver high-quality insights and models that meet the needs of users.
              </span>
            </div>
            <div className="contact-me-container">
               <span className={`${mode==1 ? 'light' : ''} contact-me-content`}>
                  <span ><i className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope`}/></span>
                  <span className={`${mode==1 ? 'text-light' : ''} email`}> 
                    <i className="fa fa-long-arrow-right"></i>
                    yassineelboustani666@gmail.com
                    <i className="fa fa-long-arrow-left"></i>
                  </span>
                  <span className={`${mode==1 ? 'light-blue' : ''}`}>contact me  <i className="fa fa-angle-right"></i></span>
               </span>
            </div>
          </div>
        </div>
      )
    }

    const BodyRight = () => {
      return (
        <div className="body_right-container">
          <div className="image-container">
              <img src={Images.image_principal} />
          </div>
          <div className="list-technos">
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.post_man} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.git_hub} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
             <div className={`${mode==1 ? 'light' : ''} techno-item`}>
                <img src={Images.react_js} />
             </div>
          </div>
        </div>
      )
    }

    return (
      <div className="page_body-container">
        <BodyLeft />
        <BodyRight />
        <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
      </div>
    );
  };

  export default Welcome; 