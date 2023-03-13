import NoteCard from "./components/NoteCard";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <main className="main-container">
        <Sidebar />
        <div className="content-container">
            <TopNavbar />
            <h2 className="page-heading">Notes</h2>
            <div className="notes-container">
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        </div>
    </main>
  );
}

export default App;
