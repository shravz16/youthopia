# Activity & Camp Location

```mermaid

---
title: Activity & Camp Location
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
