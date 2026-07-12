import styles from"./competitors.module.scss" ;
// import competitors from"../../assets/competitors.json";
import Competitor from "../competitpr/competitor";
import { useSelector } from "react-redux";


const Competitors = () => {
 const{competitors}=useSelector((store)=>store.competitor);
  return (
    <div className={styles.competitors_container}>
      <div className={styles.competitors_header}>
        <span > MissSomalia</span>
        <p> Built wiith React.js - the template is well-structured, thougthfully componentized Next.js project, giving you codebase that's productive and enjoyable to work in</p>
      </div>
      <div className={styles.competitors}>
        {
          competitors.map((compe)=>(
            <Competitor  key={compe.Id} compe={compe}/>
            
          ))
        }
      </div>
    </div>
  )
}

export default Competitors