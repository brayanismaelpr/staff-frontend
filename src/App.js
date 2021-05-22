import "./App.css";

import index from "./pages/Index/Index";
import registerstaff from "./pages/RegisterStaff/RegisterStaff";
import registermemberstaff from "./pages/RegisterMemberStaff/RegisterMemberStaff";
import listpersonstaff from "./pages/ListPersonStaff/ListPersonStaff";

// import { useRef } from "react";
import { Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={index} />
			<Route path="/registerstaff" component={registerstaff} />
      <Route path="/registermemberstaff" component={registermemberstaff} />
      <Route path="/listpersonstaff" component={listpersonstaff} />
    </div>
  );
}

