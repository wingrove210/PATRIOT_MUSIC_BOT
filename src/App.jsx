import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pricing from "./routes/Pricing";
import SurveyForm from './components/Survey/SurveyForm';
import SurveyFormIndividual from './components/Survey/SurveyFormIndividual';
import { useEffect, useState } from "react";
import Reciepie from "./components/Reciepie";
import Form from "./components/Form";
const tg = window.Telegram ? window.Telegram.WebApp : null;

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function App() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(isMobile());
    if (tg) {
      tg.expand();
      // tg.requestFullscreen();
      tg.ready(); 
    }
  }, []);

  if (!mobile) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#fff",
        fontSize: "1.5rem",
        textAlign: "center"
      }}>
        Доступно только с мобильного устройства
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Detail/>}></Route>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/survey-individual" element={<SurveyFormIndividual />} />
        <Route path="/reciepie" element={<Reciepie />}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
