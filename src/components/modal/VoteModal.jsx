import React from 'react';
import Modal from 'react-modal';
import styles from "./vote.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { increase, decrease ,addVote,resetState} from '../../features/competitors/competitorSlice';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const VoteModal = () => {


  const dispatch = useDispatch();
  let subtitle;
  
  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor,voteCount } = useSelector((store) => store.competitor);

  function closeModal() {
    dispatch(handleModal());
  }

  const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(addVote(currentCompetitor.Id));
  dispatch(resetState());
  closeModal();
}
  if(!currentCompetitor) return;

  const BackgroundStyle = {
    width: "100%",
    height: "100%", 
    backgroundImage: `
      linear-gradient(
        to top,
        rgba(11, 36, 20, 0.92) 0%,
        rgba(11, 36, 20, 0.45) 40%,
        rgba(0, 0, 0, 0) 75%
      ),
      url(${currentCompetitor.Photo })
    `,
    backgroundSize: "125%",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          {/* Top section: Competitor Photo & Bio Details */}
          <div className={styles.competitor_info}>
            <div style={BackgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor=''>Name</label>.
                <span>{currentCompetitor.FirstName}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor=''>State</label>.
                <span>{currentCompetitor.RepresentingState}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor=''>Background Study</label>.
                <span>{currentCompetitor.PersonalBackground}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor=''>employment</label>.
                <span>{currentCompetitor.EmploymentorSchool}</span>
              </div>
            </div>
          </div>

          {/* Bottom section: Vote Counter & Payment Form */}
          <div className={styles.vote_container}>
            {/* Nested controls inside vote_count to match your SCSS nesting structure */}
            <div className={styles.vote_count}>
              <span>Purchase votes</span>
              <div className={styles.vote_controls}>
                <button type="button" onClick={()=>dispatch(decrease())}>
                  <AiOutlineMinus  className={styles.icon}/>
                </button>
                <span>{voteCount}</span>
                <button type="button" onClick={()=>dispatch(increase())}>
                  <AiOutlinePlus className={styles.icon}/>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <span>Pay with Evc,Zaad,Sahal</span>
              <input type="number" placeholder="Enter your number" className={styles.form_control}/>
              <button type="submit">VoteNow</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;