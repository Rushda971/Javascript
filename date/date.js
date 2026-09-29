/*1. Age Calculator
Given a user's date of birth, calculate their current age.
calculateAge("2000-05-20"); // 26*/

/*function ageCalculator(birthday){
    const dob = new Date(birthday);
    const today = new Date();

    let age =today.getFullYear()-dob.getFullYear();

    const calculator=today.getMonth()>dob.getMonth()||
                     (today.getMonth()===dob.getMonth() &&
                     today.getMonth()>=dob.getMonth());

    if (!calculator) {
    age--;
    }
    return age;
}
const birthday = prompt("Enter your date of birth (YYYY-MM-DD):");
console.log("Age:", ageCalculator(birthday));*/

// 2. Subscription Expiry
// A user subscribes on 2026-06-11 for 30 days. Determine the expiry date.
// getExpiryDate("2026-06-11", 30);
// Output: 2026-07-11

/*function subsrcpition(){
    const subscrpition_start=Temporal.Now.plainDateISO();
    const subscrpition_end=subscrpition_start.add({days:30});
    console.log(subscrpition_end.toString());
}
subsrcpition();*/

// 3. Event Countdown
// Calculate how many days are left until a specific event.
// daysLeft("2026-12-31");
// Output: 203 days
/*function eventCount(){
    // const user=prompt("Enter date of event (2026-12-31): ");
    const event=Temporal.plainDate("2026-10-30");
    const today=Temporal.Now.plainDate();
    const diff=today.until(event);
    console.log(diff.dates);
}
eventCount();*/

//DST bug
//Daylight Saving Time (DST) is the practice of moving clocks forward by 1 hour in spring/summer and back by 1 hour in autumn/winter
//to make better use of daylight.

;

// 4. Booking Validation
// Check whether a hotel booking date is in the future.
// isValidBooking("2026-07-01");
// Output: true


// 5. Store Opening Hours
// A store is open Monday–Friday. Given a date, determine whether the store is open.
// isStoreOpen("2026-06-13");
// Output: false (Saturday)

// 6. Last Day of the Month
// For billing purposes, find the last day of any month.
// getLastDayOfMonth(2026, 1);
// Output: 28

// 7. Reminder System
// Schedule a reminder 7 days before an event.
// getReminderDate("2026-08-15");
// Output: 2026-08-08

// 8. Working Days Between Dates
// Calculate the number of weekdays between two dates, excluding weekends.
// workingDays(
//   "2026-06-01",
//   "2026-06-10"
// );
// Output: 8

// 9. Sort Transactions by Date
// Given an array of transactions, sort them from newest to oldest.
// [
//   { amount: 500, date: "2026-06-01" },
//   { amount: 200, date: "2026-06-10" }
// ]

// 10. Check Leap Year
// A user selects February 29. Validate whether the chosen year is a leap year.
// isLeapYear(2028); // true
// isLeapYear(2027); // false

// 11. Time Ago Feature
// Display social media timestamps like:
// 5 minutes ago
// 2 hours ago
// 3 days ago
// Input:
// getTimeAgo("2026-06-11T10:00:00");

// 12. Monthly Salary Payment
// If salaries are paid on the last working day of every month, determine the payment date.
// Example:
// August 31 is Sunday → pay on August 29 (Friday).

// 13. Meeting Scheduler
// Convert a meeting time from UTC to the user's local timezone.
// "2026-06-11T14:00:00Z"

// 14. Find Next Weekend
// Given today's date, return the next Saturday.
// getNextSaturday();

// 15. E-commerce Delivery Estimate
// An order is placed today and takes 5 business days to deliver. Calculate the delivery date while skipping weekends.