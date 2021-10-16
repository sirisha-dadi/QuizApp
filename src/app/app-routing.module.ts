import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [

    {
       path:'register',component: RegisterComponent
    },
    {
        path: 'exam/:id',component: QuizComponent
    },
    {
        path: '', redirectTo:'register', pathMatch:'full'
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})




export class AppRoutingModule {}
