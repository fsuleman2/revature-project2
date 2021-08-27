# Examination(Imtehan) Portal
## Postgress Credentials
```sql
Database Name : postgres
Username : postgres
Password : root12345
Schema Name : exam_schema
```
<hr>

## Spring Boot Configuration Details
``server.port=8121``
<h3>Maven Dependencies<h3>
1. spring-boot-starter-web<br>
2. spring-boot-starter-data-jpa<br>
3. spring-boot-starter-test<br>
4. postgresql<br>
5. Java8

<h3>Spring maven Plugins<h3>
1. spring-boot-maven-plugin


<hr>

## Angular Configuration Details
```server.port=4200```
```
$npm install -g @angular/cli //installing angular CLI
$ng new examfront //creating our app
cd examfront
ng serve --open //for running project on server
```
### Angular Libraries Used
  1. Angular Material UI <br>
  ``` ng add @angular/material ```

<br>
<span>27-08-2021</span><br>
<li>I have used [(ngModel)] for tway binding i.e TS<->HTML</li><br>
<li>I have imported HTML API for communication via Backend</li><br>
<li>Http Client is a class</li><br>
<li>created a service</li><br>
``` ng generate service user ``` 
<br>
<li>Added Matsnack bar from angular</li><br>
<li>Used Sweetalert2 for showing alerts in a interactive way</li><br>
```java
npm install --save sweetalert2 
```
<br>
```import Swal from 'sweetalert2' ```
