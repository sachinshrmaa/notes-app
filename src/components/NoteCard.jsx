

const NoteCard = () => {
    return ( 
        <div className="note-card">
            <p className="note-text">this is a note body!</p>
            <div className="note-footer">
              <small>26 April 2023</small>
              <div>
                <a href="#"><i class="bi-pencil-square"></i></a>
                <a href="#"><i class="bi-trash3"></i></a>
              </div>
            </div>
        </div>
    );
}
 
export default NoteCard;