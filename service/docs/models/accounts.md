---
title: Account Catalog
---
classDiagram
    class Person {
        +string User Name
        +string Full Name
        +string About
        +string Email Address
        +string Person ID
    }
      class Youth {
        +string Youth ID
        +int Age
        +string Sex
        +string Race
        +string Occupation
        +string Org

    }

    class Volunteer{
        +string Volunteer ID
    }
    
    
    class Login{
        +string Email
        +string password
    }

    class LoginService{
        +boolean validateLogin(Login login)
    }
   

    class VolunteerAccountService{
        +createVolunteerAccount(Volunteer object)
        +updateVolunteerAccount(Volunteer object)
        +getVolunteerAccount(string volunteer_id)
        +deleteVolunteerAccount(string volunteer_id)
    }
    
    Person <|-- Youth
    Person <|-- Volunteer
    YouthAccountService "*" o-- "1" Youth
    VolunteerAccountService "*" o-- "1" Volunteer
 
 class YouthAccountService{
        +createYoungAccount(Youth object)
        +updateYoungAccount(Youth object)
        +getYoungAccount(string youth_id)
        +deleteYoungAccount(string youth_id)
    }


   

