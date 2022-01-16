const users = JSON.parse(data);
let hasActiveClass = document.querySelectorAll('.userReportActivites span');
// user all data
function userAllData() {
	const dailyBtn = document.querySelector('#daily');
	const weeklyBtn = document.querySelector('#weekly');
	const monthlyBtn = document.querySelector('#monthly');
	const userActivities = document.querySelector('.userActivites');

	userActivities.innerHTML = `${users.map(function(user){
        return `
        <div class="userActivitesBox">
        <div class="userActivitesImageInfo">
            <img src="${user.img}" alt="work" class="userAllActivites playImage">
        </div>
        <div class="bodyBg">
            <div class="userActivitesInfo">
                <div>
                    <h3>${user.title}</h3>
                </div>
                <div>
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis" class="toggleInfo">
                </div>
            </div>
            <div class="userActivitesHours">
                 <h1>${user.timeframes.weekly.current}hrs</h1>
                <p>Last week ${user.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
    </div>
        `
    }).join("")}`

	dailyBtn.addEventListener('click', () => {
		if (hasActiveClass[1].classList.contains('active') || hasActiveClass[2].classList.contains('active')) {
			hasActiveClass[1].classList.remove('active');
			hasActiveClass[2].classList.remove('active');
			hasActiveClass[0].classList.add('active')
		}
		userActivities.innerHTML = `${users.map(function(user){
        return `
        <div class="userActivitesBox">
        <div class="userActivitesImageInfo">
            <img src="${user.img}" alt="work" class="userAllActivites playImage">
        </div>
        <div class="bodyBg">
            <div class="userActivitesInfo">
                <div>
                    <h3>${user.title}</h3>
                </div>
                <div>
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis" class="toggleInfo">
                </div>
            </div>
            <div class="userActivitesHours">
                 <h1>${user.timeframes.daily.current}hrs</h1>
                <p>Last day ${user.timeframes.daily.previous}hrs</p>
            </div>
        </div>
    </div>
        `
     
    }).join("")}`
		const box = userActivities.querySelectorAll('.userActivitesBox');
		switch (box) {
			case box:
				box[0].classList.add('work');
			case box:
				box[1].classList.add('play');
			case box:
				box[2].classList.add('study');
			case box:
				box[3].classList.add('excercise');
			case box:
				box[4].classList.add('social');
			case box:
				box[5].classList.add('selfCare');
			default:
				box;

		}

	});
	weeklyBtn.addEventListener('click', () => {
		if (hasActiveClass[0].classList.contains('active') || hasActiveClass[2].classList.contains('active')) {
			hasActiveClass[0].classList.remove('active');
			hasActiveClass[2].classList.remove('active');
			hasActiveClass[1].classList.add('active');
		}
		userActivities.innerHTML = `${users.map(function(user){
        return `
        <div class="userActivitesBox">
        <div class="userActivitesImageInfo">
            <img src="${user.img}" alt="work" class="userAllActivites playImage">
        </div>
        <div class="bodyBg">
            <div class="userActivitesInfo">
                <div>
                    <h3>${user.title}</h3>
                </div>
                <div>
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis" class="toggleInfo">
                </div>
            </div>
            <div class="userActivitesHours">
                 <h1>${user.timeframes.weekly.current}hrs</h1>
                <p>Last week ${user.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
    </div>
        `
     
    }).join("")}`
		const box = userActivities.querySelectorAll('.userActivitesBox');
		switch (box) {
			case box:
				box[0].classList.add('work');
			case box:
				box[1].classList.add('play');
			case box:
				box[2].classList.add('study');
			case box:
				box[3].classList.add('excercise');
			case box:
				box[4].classList.add('social');
			case box:
				box[5].classList.add('selfCare');
			default:
				box;

		}
	});
	monthlyBtn.addEventListener('click', () => {
		if (hasActiveClass[1].classList.contains('active') || hasActiveClass[0].classList.contains('active')) {
			hasActiveClass[0].classList.remove('active')
			hasActiveClass[1].classList.remove('active');
			hasActiveClass[2].classList.add('active')
		}
		userActivities.innerHTML = `${users.map(function(user){
        return `
        <div class="userActivitesBox">
        <div class="userActivitesImageInfo">
            <img src="${user.img}" alt="work" class="userAllActivites playImage">
        </div>
        <div class="bodyBg">
            <div class="userActivitesInfo">
                <div>
                    <h3>${user.title}</h3>
                </div>
                <div>
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis" class="toggleInfo">
                </div>
            </div>
            <div class="userActivitesHours">
                 <h1>${user.timeframes.monthly.current}hrs</h1>
                <p>Last month ${user.timeframes.monthly.previous}hrs</p>
            </div>
        </div>
    </div>
        `
     
    }).join("")}`
		const box = userActivities.querySelectorAll('.userActivitesBox');
		switch (box) {
			case box:
				box[0].classList.add('work');
			case box:
				box[1].classList.add('play');
			case box:
				box[2].classList.add('study');
			case box:
				box[3].classList.add('excercise');
			case box:
				box[4].classList.add('social');
			case box:
				box[5].classList.add('selfCare');
			default:
				box;

		}
	});
	const box = userActivities.querySelectorAll('.userActivitesBox');
	switch (box) {
		case box:
			box[0].classList.add('work');
		case box:
			box[1].classList.add('play');
		case box:
			box[2].classList.add('study');
		case box:
			box[3].classList.add('excercise');
		case box:
			box[4].classList.add('social');
		case box:
			box[5].classList.add('selfCare');
		default:
			box;

	}
}

userAllData();
