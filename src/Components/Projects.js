import { useState } from "react"
import Images from "../Images"

const Projects = ({mode}) => {

    const [showMoreInfo , setShowMoreInfo] = useState(false);
    const [showImage , setShowImage] = useState(false);
    const [currentImage , setCurrentImage] = useState(null);
    const [currentProject , setCurrentProject] = useState(null);


    const listProjects = [
        {
          image : Images.mobil_dev_1,
          name : "Machine Learning-based Fake News Detection System",
          description : "In this project, I developed a machine learning model to detect fake news using natural language processing (NLP) techniques. The model was trained on a large dataset of news articles labeled as either real or fake, and I used various NLP techniques such as word embeddings and feature engineering to extract meaningful features from the text data. The final model achieved high accuracy in detecting fake news and can be used as a valuable tool for news organizations, social media platforms, and individuals to identify and combat the spread of misinformation. This project allowed me to apply my skills in machine learning, NLP, and data analysis to create a tool that has significant implications for the reliability of information in today's society.",
          duration : "3 weeks",
          technologies : ["machine learning","NLP", "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_4,
          name : "Machine Learning-based Fraud Detection System",
          description : "In this project, I developed a machine learning model to detect fraudulent transactions in financial data. I used a variety of supervised and unsupervised learning techniques to analyze patterns in transaction data and identify anomalies that may indicate fraud. I also incorporated techniques such as data preprocessing, feature engineering, and model evaluation to optimize the model's performance. The final model achieved high accuracy in detecting fraudulent transactions and can be used as a valuable tool for financial institutions to prevent fraud. This project allowed me to apply my skills in machine learning, data analysis, and modeling to create a tool that has significant implications for financial security and stability.",
          duration : "3 weeks",
          technologies : ["machine learning","data visualisation","features engineering","python", "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_1,
          name : "Machine Learning-based Prediction Model for Diabetes",
          description : "In this project, I developed a machine learning model to predict the likelihood of a person developing diabetes based on various health factors such as age, BMI, blood pressure, and glucose levels. I used a dataset of patient records to train the model and employed various techniques such as feature engineering and hyperparameter tuning to improve its accuracy. The model achieved high accuracy in predicting diabetes and can be used as a useful tool for medical professionals in diagnosing and managing the disease. This project allowed me to apply my skills in machine learning, data analysis, and modeling to create a valuable tool for healthcare .",
          duration : "3 weeks",
          technologies : ["machine learning","data visualisation","python" , "seaborn" , "powerBI", "git" , "github"],
          images : []
        },
        {
          image : Images.web_dev_3,
          name : "Machine Learning-based Prediction for the FIFA World Cup",
          description : "In this project, I developed a machine learning model to predict the outcomes of the FIFA World Cup matches based on historical data. I used various tools for data visualization, such as Tableau, to analyze and understand the data better. I trained the model using data on factors such as team rankings, player statistics, and previous match results. The final model was able to predict the outcomes of the matches with a high degree of accuracy. This project allowed me to apply my skills in data analysis, machine learning, and visualization to make predictions for one of the world's biggest sporting events.",
          duration : "3 weeks",
          technologies : ["machine learning","data visualisation","python" , "seaborn" , "powerBI", "git" , "github"],
          images : [Images.ml,Images.ml2,Images.ml3,Images.ml4,Images.ml5,Images.ml6,Images.ml8,Images.ml9]
        },
        {
          image : Images.web_dev_2,
          name : "Blood Bank Management Website with MVC Pattern using PHP",
          description : "I developed a website for blood bank management using the Model-View-Controller (MVC) pattern with PHP. The website allows users to register as donors, search for blood banks and available blood types, and schedule appointments to donate blood. I implemented a secure login system and a dashboard for donors to track their donation history and eligibility status. The website is designed with a user-friendly interface and can easily scale to accommodate large amounts of data. This project allowed me to apply my knowledge of web development, PHP programming, and MVC architecture to create a valuable tool for blood bank management.",
          technologies : ["php","html","css" , "merise" , "mysql", "git" , "github" , "mvc" , "bootstrap"],
          duration : " 2 month",
          images : [Images.bb1,Images.bb2,Images.bb3,Images.bb4,Images.bb5,Images.bb6]
        },
        ]

    const ShowImage = () => {
        return(
            <div className="pop-up-image-container">
                <div className="pop-up-image-content">
                    <i className="fa fa-times" onClick={()=>setShowImage(!showImage)}></i>
                    <img src={currentImage} />
                </div>
            </div>
        )
    }
      
    const ShowMoreInfo = () => {
        return (
            <>
               {showImage == true ?  <ShowImage /> : <> </>}
                <div className="pop-up-moreinfo-container">
                    <div className="pop-up-moreinfo-content">
                        <i className="fa fa-times" onClick={()=>setShowMoreInfo(!showMoreInfo)}></i>
                        <div className="list-technologies">
                            <div className="title"><img  src={Images.flash_back_icon}/> <span>List of technologies</span> </div>
                            {
                                currentProject?.technologies?.map(technologie=>(
                                    <span > {technologie} </span>
                                ))
                            }
                        </div>
                        <div className="list-technologies list-images-container">
                            <div className="title" ><img  src={Images.images_icon}/> <span>Images</span> </div>
                            <div className="list-images-content">
                                {
                                    currentProject?.images?.map(image=>(
                                        <img src={image}  onClick={()=>{setShowImage(!showImage);setCurrentImage(image)}}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    const RenderProject = ({item}) => {
        return (
          <div className={`${mode==1 ? 'project-item-light' : ''} project-item`}>
              <div className="image-container">
                <img src={item.image} />
              </div>
              <div className="project-information">
                <div className={`${mode==1 ? 'text-light' : ''} project-name `}><img src={Images.project_name_icon} /><span>{item.name}</span></div>
                <div className="project-description">
                  <img src={Images.flash_back_icon} />
                  <span className={`${mode==1 ? 'text-light' : ''} `}>
                    {item.description}
                  </span>
                  <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
                </div>
                <div className="project-duration">
                  <img src={Images.period_icon} />
                  <div>
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.duration}
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="project-action">
                <span className={`${mode==1 ? 'light-blue' : ''} `} onClick={()=>{setCurrentProject(item);setShowMoreInfo(true)}}><i className="fa fa-angle-right"></i> More </span>
              </div>
          </div>
        )
    }

    const RenderProjects = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title" >
                    <img src={Images.project_icon}  className={`${mode==1 ? 'light-border-blue' : ''} `}/>
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Projects  </span>
                </div>
                <div className="list-projects">
                    {listProjects.map((item,index)=>(
                      <RenderProject item={item} key={index} />
                    ))}
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }


    return (
        <>
        {showMoreInfo === true ? <ShowMoreInfo /> : <></>}
        <div className="bodysecond-container">
            {/*  */}
            <RenderProjects />
        </div>
        </>
    )
  }

  export default Projects;