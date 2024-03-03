## Telephone-Package 
The telephone class has different methods. It also maintains a list of observers and notifies them whenever a phone number is dialled. 

* AddPhoneNumber - For adding a new phone number
* RemovePhoneNumber - For removing a phone number
* DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled). It notifies observers when a phone number is dialled

* AddObserver - For adding a new observer
* RemoveObserver - For removing an observer

The observer class has a method that notifies the observer when a phone number is dialled. Two observers are added to the telephone class

* The firstObserver prints the phone number
* The secondObserver prints `Now Dialling phoneNumber`

