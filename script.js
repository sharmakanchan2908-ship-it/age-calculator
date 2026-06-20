const today = new Date();

document.getElementById("todayDate").innerHTML =
"Today: " + today.toDateString();

function calculateAge() {

    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("Please select your date of birth.");
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;

    document.getElementById("result").style.display = "flex";

    const daysList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const bornDay = daysList[birthDate.getDay()];

    let zodiac = "";

    const month = birthDate.getMonth() + 1;
    const date = birthDate.getDate();

    if ((month == 3 && date >= 21) || (month == 4 && date <= 19))
        zodiac = "Aries";
    else if ((month == 4 && date >= 20) || (month == 5 && date <= 20))
        zodiac = "Taurus";
    else if ((month == 5 && date >= 21) || (month == 6 && date <= 20))
        zodiac = "Gemini";
    else if ((month == 6 && date >= 21) || (month == 7 && date <= 22))
        zodiac = "Cancer";
    else if ((month == 7 && date >= 23) || (month == 8 && date <= 22))
        zodiac = "Leo";
    else if ((month == 8 && date >= 23) || (month == 9 && date <= 22))
        zodiac = "Virgo";
    else if ((month == 9 && date >= 23) || (month == 10 && date <= 22))
        zodiac = "Libra";
    else if ((month == 10 && date >= 23) || (month == 11 && date <= 21))
        zodiac = "Scorpio";
    else if ((month == 11 && date >= 22) || (month == 12 && date <= 21))
        zodiac = "Sagittarius";
    else if ((month == 12 && date >= 22) || (month == 1 && date <= 19))
        zodiac = "Capricorn";
    else if ((month == 1 && date >= 20) || (month == 2 && date <= 18))
        zodiac = "Aquarius";
    else
        zodiac = "Pisces";

    const totalDays = Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24)
    );

    const totalWeeks = Math.floor(totalDays / 7);

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysLeft = Math.ceil(
        (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("extraInfo").innerHTML = `
        <p>🎂 Next Birthday in <strong>${daysLeft}</strong> days</p>
        <p>♍ Zodiac Sign: <strong>${zodiac}</strong></p>
        <p>📅 Born on: <strong>${bornDay}</strong></p>
        <p>📊 Total Days Alive: <strong>${totalDays}</strong></p>
        <p>📊 Total Weeks Alive: <strong>${totalWeeks}</strong></p>
    `;

    const birthdayMessage =
        document.getElementById("birthdayMessage");

    if (months === 0 && days === 0) {
        birthdayMessage.innerHTML = "🎉 Happy Birthday!";
    } else {
        birthdayMessage.innerHTML = "";
    }
}