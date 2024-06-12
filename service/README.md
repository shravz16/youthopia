[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/j48a217e)


Final Project Topic: 

    Youthopia

Description:

    Youthopia is an inclusive online platform designed to empower and support today's youth. At its core, Youthopia offers a diverse range of skill development opportunities facilitated by passionate volunteers. Whether it's mastering martial arts or diving into Python programming, young individuals can access resources and guidance to enhance their talents and capabilities.

    Recognizing the importance of mental well-being, Youthopia also provides valuable information and avenues for seeking professional assistance regarding mental health concerns. Through informative content and accessible support channels, the platform aims to address the unique challenges young people may face in this aspect of their lives.

    Moreover, Youthopia serves as a dynamic hub for volunteers to organize camps, rallies, and activities aimed at enriching the lives of youth. These events can be promoted on the platform, fostering community engagement and connection for impactful causes.
    To further its mission, Youthopia incorporates a donation feature, allowing generous volunteers to contribute towards the betterment of youngsters and the continuous improvement of the platform itself.

    Finally, fostering community interaction and support, Youthopia hosts a vibrant discussion forum where young individuals can seek advice, share experiences, and connect with peers to navigate their journey towards personal growth and fulfillment. With its multifaceted approach, Youthopia strives to be a catalyst for positive change and empowerment in the lives of youth worldwide.

Project Members:

    Kannan Karthikeyan - karthikeyan.k@northeastern.edu
    Piyush Kunjilwar - kunjilwar.p@northeastern.edu
    Abhishek Prakash - prakash.ab@northeastern.edu
    Shravan Kumar - saiprabhakar@northeastern.edu



UML Diagram:
---
title: Youthopia
---
classDiagram
class Activity {
        +Int Activity_Id
        +String Description
        +Int total_youth
        +Volunteer id
        +String Location
        +Date date
    }

    class ActivityService {
        -createActivity(Activity object)
        -deleteActivity(Activity_Id)
        -updateActivity(Activity object)
        -getActivity(Activity_Id)
    }

    class Camp {
        +String Location
        +String Description
        +Date Date
        +Volunteer id
        +Int Camp_Id
    }

    class CampService {
        -organiseCamp(Camp object)
        -removeCamp(Camp_Id)
        -updateCamp(Camp object)
    }

    Activity --o ActivityService 
    Camp --o CampService

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


        class Forum{
        + list Post 
        
    }

        class Donation{
        +Volunteer V
        +int Donation ID
        +Date Date
    }

    class Funding{
        + String category
        + double amount
        + int fundingID
        + int SSN
    }

    class Offering{
        + String product
        + String Location
        + int offeringID
        + int Units
    }

    class DonationService{
        +createDonation()
        +getDonation()
    }


    DonationService o-- Donation
    Donation <|-- Funding
    Donation <|-- Offering


    class Post{
        +String Title
        +Date Date 
        +String description
        +int Likes
        +int PostId
        +int youthId
        +list Comments
    }

    class Comment{
        +String comment
        +Date Date
        +int youthId
        +int CommentId
    }

    class PostService{
        +createPost(Post Object)
        +getPost(int PostId)
        +deletePost(int PostId)
        +updatePost(Post Object)
    }


    class CommentServices{
        +createComment(Comment Object)
        +updateComment(Comment Object)
        +deleteComment(int CommentId)
        +getComment(int CommentId)
    }


    PostService *-- Post
    PostService *-- Youth
    CommentServices *-- Comment
    CommentServices *-- Youth
    Forum *-- Post
    Forum *-- Comment

    class News {
    -NewsId:string
    -NewsTitle: string
    -NewsContent: string
}

class Skill {
    -SkillId: string
    -SkillDescription: string
}



class Health {
    -HealthId: string
    -HealthIssue: string

}


class News {
    -NewsId:string
    -NewsTitle: string
    -NewsContent: string
}

class Skill {
    -SkillId: string
    -SkillDescription: string
}

class SkillService {
    +RegAsVol(Volunteer volunteer, Skill skill)
    +RegAsYouth(Youth youth, Skill skill)
    +RemoveSkill(skillId: string)
    +Update(Skill skill)
    +Create(Skill skill)
    +GetSkills(): Skill[]
}

class Health {
    -HealthId: string
    -HealthIssue: string
}

class HealthService {
    +AddHealthIssue(Health health)
    +AddHealthIssue(health,youth)
    +UpdateHealthIssue(Health health)
    +UpdateHealthIssue(health,youth)
    +RemoveHealthIssue(healthId: string)
    +RemoveHealthIssue(healthId,youthId)
    +GetHealthIssues(): Health[]
    +GetHealthIssue(health,youth)
}
News "1" -- "0..*" SkillService :  >
Skill "1" -- "0..*" SkillService :   >
Health "1" -- "1" Youth :  >
Youth "1" -- "0..*" HealthService 


# REST Apis used

    Modules:



    Login and accounts:
        POST - /accounts/youth - Creates youth account
        PUT - /accounts/youth - updates youth account
        GET - /accounts/youth - gets account with account ID
        DELETE - /accounts/youth - delete account with account ID

        POST - /accounts/volunteer - Create volunteer account
        PUT - /accounts/volunteer - updates volunteer account
        GET - /accounts/volunteer - gets account with account ID
        DELETE - /accounts/volunteer - delete account with account ID

    Donation:
        POST - /donations - Creates a donation, enables users to donate
        GET - /donations - Gets the donation information using a auto generated donation ID

    Forums:
        POST - /forums/post - Creates a post in the forum section
        PUT - /forums/post - Updates a post in the forum section
        GET - /forums/post - Gets a post in the forum section
        DELETE - /forums/post - Deletes a post in the forum section

        POST - /forums/comment - Creates a comment in the forum section
        PUT - /forums/comment - Updates a comment in the forum section
        GET - /forums/comment - Gets a comment in the forum section
        DELETE - /forums/comment - Deletes a comment in the forum section

    Activity&Camp :
        POST - /Volunteer/activity - Creates the activity for youth/volunteer
        PUT - /Volunteer/activity - Update the youth/volunteer activity
        GET - /Volunteer/activity - Get the youth/volunteer activity
        DELETE - /Volunteer/activity - delete the youth/volunteer accounts

        POST - /Volunteer/Camp - we are orgainzing the camp 
        PUT - /Volunteer/Camp - update the details of our camp
        DELETE - /Volunteer/Camp - delete the camp details
    
    
    Health&News :
        POST - /news - Create a news item.
        PUT - /news - Retrieve a list of news items.
        GET - /news - Update a news item.
        DELETE - /news - Delete a news item.

        POST - /skills - Create a new skill in the system.
        PUT - /skills - Update a new skill in the system.
        GET - /skills - Retrieve all skills from the system.
        DELETE - /skills - Delete  all skills from the system.


        POST - /health - Add a health issue to the system.
        PUT - /health - Update a health issue to the system.
        GET - /health - Retrieve all health issues from the system.
        DELETE - /health - Delete all health issues from the system.
