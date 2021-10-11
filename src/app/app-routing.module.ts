import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivePermissionComponent } from './components/give-permission/give-permission.component';
import { HistoryVotingComponent } from './components/history-voting/history-voting.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ManagerScreenComponent } from './components/manager-screen/manager-screen.component';
import { MemesVotingComponent } from './components/memes-voting/memes-voting.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'LogIn', component: LogInComponent },
  { path: "SignUp", component: SignUpComponent },
  { path: "MemesVoting", component: MemesVotingComponent },
  { path: "ManagerScreen", component: ManagerScreenComponent },
  { path: "HistoryVoting", component: HistoryVotingComponent },
  { path: "GivePermission", component: GivePermissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
