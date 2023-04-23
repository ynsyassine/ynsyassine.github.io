import Images from "../Images"

const PersonalInformation = ({mode}) => {

    const myInformations = [
        {
          name : "Birthday",
          image : Images.birthday_icon,
          value : "15-09-2000",
        },
        {
          name : "Natonality",
          image : Images.nationality_icon,
          value : "Moroccan",
        },
        {
          name : "City",
          image : Images.city_icon,
          value  : "casablanca" , 
        },
        {
          name : "Location",
          image : Images.location_icon,
          value : "hay lalla meriem bloc 121 , N 01",
        },
        {
          name : "Civil State",
          image : Images.formation_icon,
          value : "Single"
        }
      ]

    const listFormations = [
    {
        universityImage : Images.ensias_logo,
        universityName  : "National School of Computer Science and Systems Analysis of rabat ",
        title           : "Engineering degree, GD: DATA ENGINEERING",
        period          : "sept. 2021 - juil. 2024",
        comptences      : ["big data","image processing","java","c","python","data structure","machine learning","deep learning","uml","merise","sql","unity","blender","docker" , "Kubernetes","methodes agile","analays de donnees","data visualisation"]
    },
    {
        universityImage : Images.logo_fst,
        universityName : "Faculty of Sciences and Techniques of Mohammedia",
        title : "Diploma of scientific and technical university studies (DEUST), Mathematics Computer physics",
        period          : "sept. 2019 - juil. 2021",
        comptences      : ["Algorithms" , "C" , "Mathematical Analysis" , "Linear algebra" , "merise" , "sql"]
    }
    ]

    const RenderItemInfo = ({item}) => {
      return (
        <>
            <div className={`${mode==1 ? 'line-light' : ''} line`}></div>
            <div className="info-item">
              <span className={`${mode==1 ? 'text-light' : ''}`}> <img src={item.image}/> {item.name}</span>
              <span className={`${mode==1 ? 'text-light' : ''}`}> {item.value}</span>
            </div>
        </>
      )
    }

    const ListInfo = () => {
      return (
        <div className="list-info">
          {
            myInformations.map((item,index)=>(
              <RenderItemInfo item={item} key={index} />
            ))
          }
        </div>
      )
    }

    const RenderMyInfo = () => {
      return (
        <div className="bodysecond-left">
            <div className={`${mode==1 ? 'light-border-blue' : ''} image-container `}>
              <img src={Images.profile_image} />
            </div>
            <ListInfo />
            <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
        </div>
      )
    }

    const RenderFormation = ({item}) => {
      return (
        <div className="formation-item">
              <div className="item-title">
                  <div className={`${mode==1 ? 'light-border-blue' : ''} image-container`}>
                      <img src={item.universityImage} />
                  </div>
                  <div className="item-university-info">
                    <span className={`${mode==1 ? 'text-light' : ''} `}>
                      {item.universityName}
                    </span>
                    <span className={`${mode==1 ? 'period-light' : ''} `}>{item.period}</span>
                  </div>
              </div>
              <div className="item-diplome-info">
                  <span className={`${mode==1 ? 'text-light' : ''} `}> 
                    <i className={`${mode==1 ? 'light-border-blue' : ''} fa fa-angle-right `}></i>
                    {item.title}
                  </span>
                  <div className="list-specialities">
                      {
                        item?.comptences?.map((competence,index)=>(
                            <div  key={index}><span className={`${mode==1 ? 'light-blue' : ''} `}>{competence}</span></div>                        
                        ))
                      }
                  </div>
              </div>
        </div>
      )
    }

    const RenderFormations = () => {
      return (
            <div className="bodysecond-right">
                <div className="body-title">
                    <img src={Images.formation_icon} className={`${mode==1 ? 'light-border-blue' : ''} `} />
                    <span className={`${mode==1 ? 'text-light light-title' : ''} `}> Formations </span>
                </div>
                <div className="list-formations">
                  {
                    listFormations.map(item=>
                      <RenderFormation item={item} />
                    )
                  }
                </div>
                <div className={`${mode==1 ? 'line-body-light' : ''} line-body`}></div>
            </div>
      )
    }

    return (
      <div className="bodysecond-container">
            {/*  */}
            <RenderMyInfo />
            <RenderFormations />
      </div>
    )
  }

  export default PersonalInformation; 