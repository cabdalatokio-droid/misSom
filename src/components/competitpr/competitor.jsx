import styles from "./competitor.module.scss";
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
import {setCurrentCompetitor} from "../../features/competitors/competitorSlice"

const Competitor = ({ compe }) => {

  const voteNow=()=>{
    dispatch(setCurrentCompetitor(compe))
    dispatch(handleModal());
  }
  const dispatch=useDispatch();
const BackgroundStyle = {
  width: "100%",
  backgroundImage: `
    linear-gradient(
      to top,
      rgba(11,36,20,.92) 0%,
      rgba(11,36,20,.45) 40%,
      rgba(0,0,0,0) 75%
    ),
    url(${compe.Photo})
  `,
  backgroundSize: "125%",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
};

  return (
    <div className={styles.competitor} style={BackgroundStyle}>
      <div className={styles.info}>
        <span className={styles.name}>{compe.FirstName}</span>
        <span className={styles.state}>{compe.RepresentingState}</span>
        <span className={styles.vote_count}>Total Votes : {compe.NumberofVotes}</span>
      </div>
      <div  className={styles.vote} onClick={voteNow}>
        <MdOutlineHowToVote className={styles.vote_icon}/>
      </div>
    </div>
  );
};

export default Competitor;