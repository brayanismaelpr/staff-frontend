import "./App.css";

import index from "./pages/Index/Index";
import registerstaff from "./pages/RegisterStaff/RegisterStaff";
import registermemberstaff from "./pages/RegisterMemberStaff/RegisterMemberStaff";
import listpersonstaff from "./pages/ListPersonStaff/ListPersonStaff";
import listplayer from "./pages/ListPlayer/ListPlayer";
import registerfile from "./pages/RegisterFile/RegisterFile";

import { Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={index} />
			<Route path="/registerstaff" component={registerstaff} />
      <Route path="/registerfile" component={registerfile} />
      <Route path="/registermemberstaff" component={registermemberstaff} />
      <Route path="/listpersonstaff" component={listpersonstaff} />
      <Route path="/listplayer" component={listplayer} />
    </div>
  );
}

