# Donation Model

```mermaid

---
Class Diagram for Donation
---

classDiagram
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