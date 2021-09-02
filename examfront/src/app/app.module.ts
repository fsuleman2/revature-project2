import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';

import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    UserSidebar,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddCategoryComponent,
    AddQuestionComponent,
    AddQuizComponent,
    ViewCategoriesComponent,
    ViewQuizzesComponent,
    UpdateQuizComponent,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,

    HttpClientModule,
    MatSnackBarModule,

    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    NgbModule,
    MatSlideToggleModule,
    MatSelectModule,


    NavbarModule,
    WavesModule,
    ButtonsModule


  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }