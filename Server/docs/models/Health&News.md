# Health&Newss

```mermaid
---
title: Update
---

classDiagram
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
Youth "1" -- "0..*" HealthService :  